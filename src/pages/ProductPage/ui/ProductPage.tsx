import React, {memo} from 'react';
import classes from "./ProductPage.module.scss";
import {ProductDetails, productDetailsReducer} from "entities/Product";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useParams} from "react-router-dom";
import {productCommentsReducer} from "../model/slice/productCommentsSlice";
import {addCommentFormReducer} from "feautures/AddCommentForm";
import {Page} from "widgets/Page";
import {Products} from "entities/Product";
import AppContainer from "shared/ui/AppContainer/AppContainer";

const reducers: ReducerList = {
  productDetails: productDetailsReducer,
  productComments: productCommentsReducer,
  addCommentForm: addCommentFormReducer,
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