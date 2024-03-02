import classNames from 'classnames';
import React, {memo} from 'react';
import classes from './CommentCard.module.scss';
import Loader from "widgets/Loader";
import {Comment} from "../../model/types/comment";

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading: boolean;
}

const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
    isLoading
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(className, classes.CommentCard)}>
        <Loader/>
      </div>
    );
  }

  return (
    <div className={classNames(className, classes.CommentCard)}>
      COMMENT
      <p>id: {comment.id}</p>
      <p>userID: {comment.userId}</p>
      <p>body: {comment.body}</p>
      <p>productID: {comment.productId}</p>
    </div>
  );
});

export default CommentCard;