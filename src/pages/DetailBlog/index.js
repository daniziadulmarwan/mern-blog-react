import React from "react";
import "./detailBlog.scss";
import { BlogImg } from "../../assets";
import { Link } from "../../components";
import { useHistory } from "react-router-dom";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={BlogImg} alt="thumb" />
      <p className="blog-title ">Microservice</p>
      <p className="blog-author">Marwan - 23 Oktober 2020</p>
      <p className="blog-body">Lorem ipsum dolor sit amet</p>
      <Link title="Back to home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
