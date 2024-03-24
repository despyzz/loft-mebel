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
      <div className={classes.Header}>
        <div className={classes.Name}>
          {comment.user.username}
        </div>

        {/*<div className={classes.Rating}>*/}
        {/*  рейтинг*/}
        {/*</div>*/}
      </div>

      <div className={classes.Content}>
        {comment.body}
      </div>
    </div>
  );
});

export default CommentCard;