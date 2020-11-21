import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { localStorageHandler } from "./../../helpers/localStorage";
import "./card.scss";

export const Card = ({ image, updateFavorites }) => {
  const history = useHistory();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    let findInStorage = JSON.parse(localStorage.getItem("favorites")).filter(
      (item) => item.id === image.id
    ).length;

    if (findInStorage) {
      setLiked(true);
    }
  }, []);

  const likeClick = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    localStorageHandler(image);
    if (updateFavorites) {
      updateFavorites(true);
    }
  };

  return (
    <div
      className="card"
      style={{
        background: `url("${image.download_url}") no-repeat center/cover`,
      }}
      onClick={() => history.push(`/image-info/${image.id}`)}
    >
      <div className="card-info">
        <span>Author: {image.author}</span>
        <i
          className={`${liked ? "fas" : "far"} fa-heart heart`}
          onClick={likeClick}
        ></i>
      </div>
    </div>
  );
};
