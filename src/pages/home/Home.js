import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Home.scss";
import { ScrollDown } from "./../../components/scroll-down/scroll-down";
import { Card } from "./../../components/card/card";
import { Pagination } from "./../../components/pagination/pagination";
import { Loader } from "./../../components/loader/loader";
import { Navbar } from "./../../components/navbar/navbar";

export const Home = () => {
  const [images, setImages] = useState([]);
  const [picPerPage, setPicPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    Axios.get(
      `https://picsum.photos/v2/list?page=${currentPage}&limit=${picPerPage}`
    ).then((data) => setImages(data.data));
  }, [picPerPage, currentPage]);

  return (
    <>
      <Navbar />
      <section className="home-page">
        <div className="header">
          <h1 className="title">Lorem Pixum API in action</h1>
          <ScrollDown />
        </div>
        <div className="cards-block">
          <h1 className="title">Photo cards</h1>
          <div className="pictures-count">
            <h4 className="title">Pictures per. page:</h4>
            <span
              className={`pictures-value ${picPerPage === 5 && "active"}`}
              onClick={() => {
                setPicPerPage(5);
              }}
            >
              5
            </span>
            <span
              className={`pictures-value ${picPerPage === 10 && "active"}`}
              onClick={() => {
                setPicPerPage(10);
              }}
            >
              10
            </span>
            <span
              className={`pictures-value ${picPerPage === 20 && "active"}`}
              onClick={() => {
                setPicPerPage(20);
              }}
            >
              20
            </span>
          </div>
          <div className="cards-section">
            {!images.length ? (
              <Loader />
            ) : (
              images.map((image) => <Card image={image} key={image.url} />)
            )}
          </div>
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>
    </>
  );
};
