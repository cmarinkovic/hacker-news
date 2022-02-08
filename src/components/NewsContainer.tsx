import { useCallback, useEffect, useState } from "react";

import { connect } from "react-redux";
import { Dispatch, RootState } from "../store";

import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
import { CenteredRow, SNewsContainer } from "../styles";

interface NewsContainerProps {
  news: object;
  toggleFavorite: (string) => object;
  option: string;
  selectedNavBtn: string;
  setSelectedNavBtn: (string) => void;
}

const NewsContainer = ({
  news,
  toggleFavorite,
  option,
  selectedNavBtn,
  setSelectedNavBtn,
}: NewsContainerProps) => {
  const [newsRes, setNewsRes] = useState<Array<object>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentNews, setCurrentNews] = useState<Array<object>>([]);
  const [totalNews, setTotalNews] = useState(0);
  const newsPerPage = 8;

  const getNewsRes = useCallback(async () => {
    setLoading(true);

    option &&
      (await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?query=${option}&page=0`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setNewsRes(cleanHits(res.hits));
          setCurrentPage(1);
          setLoading(false);
        }));
  }, [option]);

  const cleanHits = (hits: Array<object>) => {
    let cleanedHits = [];

    try {
      cleanedHits = hits.filter(
        (hit) =>
          hit["author"] &&
          hit["story_title"] &&
          hit["story_url"] &&
          hit["created_at"]
      );
      return cleanedHits;
    } catch (e) {}

    return [];
  };

  const filterFavorites = useCallback(
    (newsArr) => {
      return selectedNavBtn === "favorites"
        ? (setCurrentPage(1),
          newsArr.filter((newsItem) => {
            const key = `${newsItem["author"]}-${newsItem["created_at"]}`;
            return news[key];
          }))
        : newsArr;
    },
    [news, selectedNavBtn]
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setSelectedNavBtn("all");
    getNewsRes();
  }, [option, getNewsRes, setSelectedNavBtn]);

  useEffect(() => {
    let filteredNews;

    if (newsRes && newsRes.length > 0) {
      filteredNews = filterFavorites(newsRes);
      setTotalNews(filteredNews.length);
    }

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    filteredNews &&
      setCurrentNews(filteredNews.slice(indexOfFirstNews, indexOfLastNews));
  }, [newsRes, currentPage, selectedNavBtn, filterFavorites]);

  return (
    <>
      {loading ? (
        option && <p>Loading...</p>
      ) : (
        <SNewsContainer>
          {currentNews && currentNews.length > 0 ? (
            currentNews.map((newsItem) => {
              const key = `${newsItem["author"]}-${newsItem["created_at"]}`;
              return (
                <NewsItem
                  key={key}
                  title={newsItem["story_title"]}
                  author={newsItem["author"]}
                  time={newsItem["created_at"]}
                  url={newsItem["story_url"]}
                  toggleFavorite={() => toggleFavorite(key)}
                  isFavorite={news[key]}
                />
              );
            })
          ) : (
            <p>No news found.</p>
          )}
        </SNewsContainer>
      )}
      <CenteredRow>
        <Pagination
          newsPerPage={newsPerPage}
          totalNews={totalNews}
          currentPage={currentPage}
          paginate={paginate}
        />
      </CenteredRow>
    </>
  );
};

const mapState = (state: RootState) => ({
  news: state.news,
});

const mapDispatch = (dispatch: Dispatch) => ({
  toggleFavorite: (favoriteKey) =>
    dispatch({ type: "news/toggleFavorite", payload: favoriteKey }),
});

export default connect(mapState, mapDispatch)(NewsContainer);
