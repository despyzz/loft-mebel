import React, {memo, useEffect} from 'react';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchProductDetailsById} from "../../model/services/fetchProductDetailsById/fetchProductDetailsById";
import {getProductData} from "../../model/selectors/getProductData/getProductData";
import {useSelector} from "react-redux";
import {getProductIsLoading} from "../../model/selectors/getProductIsLoading/getProductIsLoading";
import {getProductError} from "../../model/selectors/getProductError/getProductError";
import Loader from "widgets/Loader";

interface ProductDetailsProps {
  id?: string,
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

  if (error || !id) {
    return (
      <AppContainer>
        <h1>Товара не существует</h1>
      </AppContainer>
    );
  }

  if (isLoading) {
    return (
      <AppContainer>
        <Loader/>
      </AppContainer>
    )
  }

  return (
    <AppContainer>
      <p>id: {data?.id}</p>
      <p>name: {data?.name}</p>
      {
        data?.description.map((value, index) => {
          return (
            <p key={index}>{value}</p>
          );
        })
      }
    </AppContainer>
  );
});

export default ProductDetails;