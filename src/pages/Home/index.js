import React, { useEffect, useState } from "react";
import "./home.scss";
import { Button, BlogItem, Gap } from "../../components";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // const [DataBlog, setDataBlog] = useState([]);
  const { dataBlogs, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("data blog:", dataBlogs);

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "UPDATE_NAME",
      });
    }, 3000);

    Axios.get("http://localhost:4000/v1/blog/posts?page=2&perPage=2")
      .then((result) => {
        const responseAPI = result.data;

        dispatch({
          type: "UPDATE_DATA_BLOG",
          payload: responseAPI.data,
        });
        // setDataBlog(responseAPI.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        {name}
        <Button
          title="Create Blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlogs.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              id={blog._id}
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
