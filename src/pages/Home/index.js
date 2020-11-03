import React, { useEffect, useState } from "react";
import "./home.scss";
import { Button, BlogItem, Gap } from "../../components";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const Home = () => {
  const [DataBlog, setDataBlog] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/v1/blog/posts")
      .then((result) => {
        const responseAPI = result.data;
        setDataBlog(responseAPI.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create Blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {DataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
