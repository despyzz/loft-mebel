import { getSearchValue } from "./model/selectors/searchSelectors";
import { searchReducer } from "./model/slices/SearchSlice";
import SearchInput from "./ui/SearchInput/SearchInput";

export {
  searchReducer,
  SearchInput,
  getSearchValue
}