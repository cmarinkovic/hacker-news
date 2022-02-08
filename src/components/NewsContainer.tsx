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

/**
 * Displays each news element in pages.
 *
 * @component
 */
const NewsContainer = ({
  news,
  toggleFavorite,
  option,
  selectedNavBtn,
  setSelectedNavBtn,
}: NewsContainerProps) => {
  /**
   * News response state hook.
   * @constant
   *
   * @type {[Array<object>, function]}
   */
  const [newsRes, setNewsRes] = useState<Array<object>>([]);

  /**
   * Loading state hook. It's used when making the API request.
   * @constant
   *
   * @type {[boolean, function]}
   */
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Current page the user is in state hook.
   * @constant
   *
   * @type {[number, function]}
   */
  const [currentPage, setCurrentPage] = useState<number>(1);

  /**
   * Current news to be displayed state hook.
   * @constant
   *
   * @type {[Array<object>, function]}
   */
  const [currentNews, setCurrentNews] = useState<Array<object>>([]);

  /**
   * Amount of total news state hook.
   * @constant
   *
   * @type {[number, function]}
   */
  const [totalNews, setTotalNews] = useState(0);

  /**
   * News per page.
   * @constant
   *
   * @type {number}
   */
  const newsPerPage = 8;

  /**
   * Attempts to obtain news from an API using "option" (angular, reactjs, vuejs) as a parameter.
   * Then sets the state of corresponding state hooks.
   */
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

  /**
   * Filters the incorrect hits from the API.
   *
   * @param {Array<object>} hits The hits array from the API.
   * @return {Array<object>} Resulting filtered array.
   */
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

  /**
   * Filters saved favorite news from the API response.
   */
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

  /**
   * Sets the value of currentPage.
   *
   * @param {number} pageNumber Page number to change to.
   */
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
