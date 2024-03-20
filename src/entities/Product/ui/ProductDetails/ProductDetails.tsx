import React, {memo, useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchProductDetailsById} from "../../model/services/fetchProductDetailsById/fetchProductDetailsById";
import {getProductData} from "../../model/selectors/getProductData/getProductData";
import {getProductIsLoading} from "../../model/selectors/getProductIsLoading/getProductIsLoading";
import {getProductError} from "../../model/selectors/getProductError/getProductError";
import Loader from "widgets/Loader";
import Photos from "../Photos/Photos";
import Info from "../Info/Info";
import Characteristics from "../Characteristics/Characteristics";
import classes from './ProductDetails.module.scss';
import AppButton from "shared/ui/AppButton/AppButton";
import classNames from "classnames";
import {getProductComments} from "pages/ProductPage/model/slice/productCommentsSlice";
import {AddCommentForm} from "feautures/AddCommentForm";
import {CommentList} from "entities/Comment";
import {addCommentForProduct, fetchCommentsByProductId, getProductCommentsIsLoading} from "pages/ProductPage";

interface ProductDetailsProps {
  id?: string,
}

enum Switcher {
  characteristics,
  reviews
}

const ProductDetails = memo((props: ProductDetailsProps) => {
  const {
    id
  } = props;

  const dispatch = useAppDispatch();

  const data = useSelector(getProductData);
  const isLoading = useSelector(getProductIsLoading);
  const error = useSelector(getProductError);

  useEffect(() => {
    dispatch(fetchProductDetailsById(id!))
  }, [dispatch, id]);

  const [selectedComponent, setSelectedComponent] = useState<Switcher>(Switcher.characteristics);
  const handleSwitcherClick = (component: Switcher) => {
    return () => setSelectedComponent(component);
  }

  const commentsData = useSelector(getProductComments.selectAll);
  const commentsIsLoading = useSelector(getProductCommentsIsLoading);

  const onSendComment = useCallback((commentBody: string) => {
    dispatch(addCommentForProduct(commentBody))
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchCommentsByProductId(id!))
  }, [dispatch, id]);


  if (error || !id) {
    return <h1>Товара не существует</h1>;
  }

  if (isLoading) {
    return <Loader/>
  }

  return (
    <div className={classes.ProductDetails}>
      <div className={classes.Group}>
        <Photos
          className={classes.Photos}
          photos={data?.photos!}
        />

        <Info
          className={classes.Info}
          name={data?.name}
          rating={data?.rating}
          category={data?.category}
          price={data?.price}
          description={data?.description}
        />
      </div>

      <div className={classes.Switcher}>
        <AppButton
          className={classNames(classes.Button, selectedComponent === Switcher.characteristics ? classes.Active : null)}
          onClick={handleSwitcherClick(Switcher.characteristics)}
        >
          Характеристики
        </AppButton>

        <AppButton
          className={classNames(classes.Button, selectedComponent === Switcher.reviews ? classes.Active : null)}
          onClick={handleSwitcherClick(Switcher.reviews)}
        >
          Отзывы
        </AppButton>
      </div>

      {
        selectedComponent === Switcher.characteristics &&
        <Characteristics
          characteristics={data?.characteristics}
        />
      }

      {
        selectedComponent === Switcher.reviews &&
        <div className={classes.Comments}>
          <CommentList isLoading={commentsIsLoading} comments={commentsData}/>
          <AddCommentForm onSendComment={onSendComment}/>
        </div>
      }

    </div>
  )
    ;
});

export default ProductDetails;