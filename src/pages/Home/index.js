import React, { useEffect } from "react";
import "./home.scss";
import { Button, BlogItem, Gap } from "../../components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataBlog } from "../../configs/redux/action";

const Home = () => {
  const { dataBlog } = useSelector((state) => state.homeReducer);
  const { name } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog());
  }, [dispatch]);
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create Blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      {name}
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => {
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
