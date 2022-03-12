import React from "react";
import { useSelector } from "react-redux";
import s from "./Posts.module.css";
import { AiOutlineBars } from "react-icons/ai";

const Posts = ({ handleBtnChange }) => {
  const posts = useSelector((state) => state.products.posts);
  console.log(`posts`, posts);
  return (
    <ul className={s.item}>
      {posts.map(
        ({
          id,
          title,
          text,
          url,
          image,
          active,
          sort_order,
          created_at,
          updated_at,
        }) => (
          <li key={id} className={s.mainItem}>
            <h2 className={s.title}>{title}</h2>
            <AiOutlineBars
              onClick={() => handleBtnChange(id)}
              className={s.icon}
            />

            <ul className={s.list_text}>
              <p>{text}</p>

              <img src={url} alt="" width="250px" height="165px" />

              <a href={image} className={s.link}>
                Image link
              </a>

              <p>active: {active}</p>

              <p>sort_order:{sort_order}</p>
              <p>created: {created_at}</p>
              <p>updated: {updated_at}</p>
            </ul>
          </li>
        )
      )}
    </ul>
  );
};

export default Posts;
