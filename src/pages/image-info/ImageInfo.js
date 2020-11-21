import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Loader } from "./../../components/loader/loader";
import { localStorageHandler } from "./../../helpers/localStorage";
import { Navbar } from "./../../components/navbar/navbar";
import "./ImageInfo.scss";

export const ImageInfo = () => {
  const [image, setImage] = useState({});
  const [liked, setLiked] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const imageId = history.location.pathname.split("/")[2];
    Axios.get(`https://picsum.photos/id/${imageId}/info`).then((data) => {
      setImage(data.data);
    });
    let findInStorage = JSON.parse(localStorage.getItem("favorites")).filter(
      (item) => item.id === imageId
    ).length;

    if (findInStorage) {
      setLiked(true);
    }
  }, [liked]);

  return (
    <>
      <Navbar />
      <section className="image-page">
        {image.id ? (
          <>
            <div className="image-block">
              <img
                src={image.download_url}
                className="image"
                alt={image.author}
              />
            </div>
            <div className="info-block">
              <h1 className="title">Image Info</h1>
              <p>
                <span>Author:</span> {image.author} <br />
                <span>Size:</span> {image.height}x{image.width}px
                <br />
                <span>Download URL:</span>{" "}
                <a href={image.download_url} className="download-url">
                  {image.download_url}
                </a>
              </p>
              <button className="btn" onClick={() => history.goBack()}>
                Go back
              </button>
              <button
                href="#"
                className="btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setLiked(!liked);
                  localStorageHandler(image);
                }}
              >
                {liked ? "Unlike" : "Like"} this photo
              </button>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};
