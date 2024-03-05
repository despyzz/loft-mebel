import {
  getMainPageProductsError,
  getMainPageProductsHasMore,
  getMainPageProductsIsLoading,
  getMainPageProductsLimit,
  getMainPageProductsPage
} from './model/selectors/mainPgeProductsSelectors'
import type {MainPageSchema} from './model/types/mainPage'
import {MainPageAsync} from './ui/MainPage.async'


export {
  MainPageAsync as MainPage,
  MainPageSchema,
  getMainPageProductsError,
  getMainPageProductsHasMore,
  getMainPageProductsIsLoading,
  getMainPageProductsLimit,
  getMainPageProductsPage,
}