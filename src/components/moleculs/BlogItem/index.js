import React from "react";
// import { BlogImg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import "./blogitem.scss";
import { useHistory } from "react-router-dom";

const BlogItem = (props) => {
  const history = useHistory();

  const { id, image, title, name, date, body } = props;
  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="post" />
      <div className="content-detail">
        <p className="title"> {title}</p>
        <p className="author">
          {name} - {date}
        </p>
        <p className="body">{body}</p>
        <Gap height={10} />
        <Button
          title="View Detail"
          onClick={() => history.push(`/detail-blog/${id}`)}
        />
      </div>
    </div>
  );
};

export default BlogItem;
