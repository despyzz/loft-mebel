import React, {memo, useCallback, useEffect} from 'react';
import classes from "./ProductPage.module.scss";
import {ProductDetails, productDetailsReducer} from "entities/Product";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useParams} from "react-router-dom";
import {CommentList} from "entities/Comment";
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {getProductComments, productCommentsReducer} from "../model/slice/productCommentsSlice";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchCommentsByProductId} from "../model/services/fetchCommentsByProductId/fetchCommentsByProductId";
import {getProductCommentsIsLoading} from "../model/selectors/getProductCommentsIsLoading/getProductCommentsIsLoading";
import {getProductError} from "entities/Product/model/selectors/getProductError/getProductError";
import {AddCommentForm} from "feautures/AddCommentForm";
import {addCommentForProduct} from "../model/services/addCommentForProduct/addCommentForProduct";
import {Page} from "widgets/Page";

const reducers: ReducerList = {
  productDetails: productDetailsReducer,
  productComments: productCommentsReducer
}

const ProductPage = () => {
  const {id} = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const commentsData = useSelector(getProductComments.selectAll);
  const commentsIsLoading = useSelector(getProductCommentsIsLoading);
  const commentsError = useSelector(getProductError);

  const onSendComment = useCallback((commentBody: string) => {
    dispatch(addCommentForProduct(commentBody))
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchCommentsByProductId(id!))
  }, [dispatch, id]);

  return (
    <Page>
      <DynamicModuleLoader reducers={reducers}>
        <div className={classes.ProductPage}>
          <ProductDetails id={id}/>
          <AppContainer>
            <h2>
              Комментарии
            </h2>
          </AppContainer>
          <AddCommentForm onSendComment={onSendComment}/>
          {
            commentsError
              ?
              <div>Ошибка при загрузке комментариев</div>
              :
              <CommentList isLoading={commentsIsLoading} comments={commentsData}/>
          }
        </div>
      </DynamicModuleLoader>
    </Page>
  );
};

export default memo(ProductPage);