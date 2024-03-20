import React, {memo} from 'react';
import classes from './CommentList.module.scss'
import Loader from "widgets/Loader";
import {Comment} from "../../model/types/comment";
import CommentCard from "../CommentCard/CommentCard";
import classNames from "classnames";

interface CommentListProps {
  className?: string;
  comments?: Array<Comment>;
  isLoading: boolean;
}

const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(classes.CommentList, className)}>
        <Loader/>
      </div>
    );
  }

  if (!comments) {
    return (
      <div className={classNames(classes.CommentList, className)}>
        Комментарии отсутствуют
      </div>
    );
  }

  return (
    <div className={classNames(classes.CommentList, className)}>
      {
        comments.map((value, index) => {
          return <CommentCard key={index} comment={value} isLoading={isLoading}/>
        })
      }
    </div>
  );
});

export default CommentList;