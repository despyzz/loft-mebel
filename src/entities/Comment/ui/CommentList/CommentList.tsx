import React, {memo} from 'react';
import classes from './CommentList.module.scss'
import Loader from "widgets/Loader";
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Comment} from "../../model/types/comment";
import CommentCard from "../CommentCard/CommentCard";

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
      <AppContainer className={className}>
        <div className={classes.CommentList}>
          <Loader/>
        </div>
      </AppContainer>
    );
  }

  if (!comments) {
    return (
      <AppContainer className={className}>
        <div className={classes.CommentList}>
          Комментарии отсутствуют
        </div>
      </AppContainer>
    );
  }

  return (
    <AppContainer className={className}>
      <div className={classes.CommentList}>
        {
          comments.map((value, index) => {
            return (
              <CommentCard key={index} comment={value} isLoading={isLoading}/>
            );
          })
        }
      </div>
    </AppContainer>
  );
});

export default CommentList;