import React, {memo} from 'react';
import classes from "./ProductPage.module.scss";
import {ProductDetails, productDetailsReducer} from "entities/Product";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useParams} from "react-router-dom";

const reducers: ReducerList = {
  productDetails: productDetailsReducer,
}

const ProductPage = () => {
  const {id} = useParams<{id: string}>();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classes.ProductPage}>
        <ProductDetails id={id}/>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ProductPage);