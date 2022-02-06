import { useState } from "react";
import RelativeTime from "react-relative-time";

import {
  FavoriteContainer,
  FavoriteIcon,
  NewsInfo,
  NewsInfoContainer,
  NewsItemContainer,
  NewsTitle,
  TimeIcon,
} from "../styles";

import favoriteIconUnmarked from "../assets/iconmonstr-favorite-2.svg";
import favoriteIconMarked from "../assets/iconmonstr-favorite-3.svg";
import timeIcon from "../assets/iconmonstr-time-2_4.svg";

interface NewsItemProps {
  title: string;
  time: string;
  author: string;
  url: string;
  toggleFavorite: () => void;
  isFavorite?: boolean;
}

const NewsItem = ({
  title,
  time,
  author,
  url,
  toggleFavorite,
  isFavorite,
}: NewsItemProps) => {
  const [isFavoriteState, setIsFavoriteState] = useState<boolean>(isFavorite);

  return (
    <NewsItemContainer>
      <a href={url} target="_blank" rel="noreferrer">
        <NewsTitle>
          <NewsInfoContainer>
            <TimeIcon src={timeIcon} />
            <NewsInfo>
              <RelativeTime value={time} titleFormat="YYYY/MM/DD HH:mm" /> by{" "}
              {author}
            </NewsInfo>
          </NewsInfoContainer>
          {title}
        </NewsTitle>
      </a>
      <FavoriteContainer>
        {isFavoriteState ? (
          <FavoriteIcon
            src={favoriteIconMarked}
            onClick={() => {
              setIsFavoriteState(!isFavoriteState);
              toggleFavorite();
            }}
            onMouseEnter={() => setIsFavoriteState(!isFavoriteState)}
            onMouseLeave={() => setIsFavoriteState(!isFavoriteState)}
          />
        ) : (
          <FavoriteIcon
            src={favoriteIconUnmarked}
            onClick={() => {
              setIsFavoriteState(!isFavoriteState);
              toggleFavorite();
            }}
            onMouseEnter={() => setIsFavoriteState(!isFavoriteState)}
            onMouseLeave={() => setIsFavoriteState(!isFavoriteState)}
          />
        )}
      </FavoriteContainer>
    </NewsItemContainer>
  );
};

export default NewsItem;
