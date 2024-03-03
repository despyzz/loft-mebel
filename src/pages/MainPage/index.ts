import {getMainPageProductsError} from './model/selectors/getMainPageProductsError/getMainPageProductsError'
import {getMainPageProductsHasMore} from './model/selectors/getMainPageProductsHasMore/getMainPageProductsHasMore'
import {getMainPageProductsIsLoading} from './model/selectors/getMainPageProductsIsLoading/getMainPageProductsIsLoading'
import {getMainPageProductsLimit} from './model/selectors/getMainPageProductsLimit/getMainPageProductsLimit'
import {getMainPageProductsPage} from './model/selectors/getMainPageProductsPage/getMainPageProductsPage'
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