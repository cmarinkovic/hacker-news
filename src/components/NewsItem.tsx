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
  /**
   * Is favorite state hook. It's used to toggle and display favorite status for the NewsItem.
   * @constant
   *
   * @type {[boolean, function]}
   */
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
            alt="Toggle favorite."
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
            alt="Toggle favorite."
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
