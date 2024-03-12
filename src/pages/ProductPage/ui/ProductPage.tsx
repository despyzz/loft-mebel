import React, {memo, useCallback, useEffect} from 'react';
import classes from "./ProductPage.module.scss";
import {ProductDetails, productDetailsReducer} from "entities/Product";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useParams} from "react-router-dom";
import {CommentList} from "entities/Comment";
import {getProductComments, productCommentsReducer} from "../model/slice/productCommentsSlice";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchCommentsByProductId} from "../model/services/fetchCommentsByProductId/fetchCommentsByProductId";
import {getProductCommentsIsLoading} from "../model/selectors/getProductCommentsIsLoading/getProductCommentsIsLoading";
import {getProductError} from "entities/Product/model/selectors/getProductError/getProductError";
import {AddCommentForm} from "feautures/AddCommentForm";
import {addCommentForProduct} from "../model/services/addCommentForProduct/addCommentForProduct";
import {Page} from "widgets/Page";
import {Products} from "../../../entities/Product";
import AppContainer from "../../../shared/ui/AppContainer/AppContainer";

const reducers: ReducerList = {
  productDetails: productDetailsReducer,
  productComments: productCommentsReducer
}

const ProductPage = () => {
  const {id} = useParams<{ id: string }>();

  return (
    <Page>
      <DynamicModuleLoader reducers={reducers}>

        <AppContainer className={classes.ProductPage}>
          <ProductDetails id={id}/>

          <div className={classes.Products}>
            <div className={classes.Title}>
              Хиты продаж
            </div>
            <Products/>
          </div>
        </AppContainer>

      </DynamicModuleLoader>
    </Page>
  );
};

export default memo(ProductPage);