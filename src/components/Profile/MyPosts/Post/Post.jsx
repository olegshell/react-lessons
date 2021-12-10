import React from 'react';
import s from './Post.module.css'


const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://drasler.ru/wp-content/uploads/2019/05/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%8E%D1%82%D1%83%D0%B1%D0%B0-%D0%BC%D0%B0%D0%B9%D0%BD%D0%BA%D1%80%D0%B0%D1%84%D1%82-%D1%84%D0%BE%D1%82%D0%BE-005.jpg" alt="" />
      {props.massage}
      <div>
        <span>like</span> {props.sumLikes}
      </div>
    </div>
  )
}

export default Post;

