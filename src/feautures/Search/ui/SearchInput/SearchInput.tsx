import classes from './SearchInput.module.scss';
import classNames from "classnames";
import SearchIcon from "shared/assets/SearchIcon.svg";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {ChangeEventHandler, memo, useCallback} from "react";
import {searchActions} from "../../model/slices/SearchSlice";
import {useSelector} from "react-redux";
import {getSearchValue} from "../../model/selectors/searchSelectors";
// import useDebounce from "shared/lib/hooks/useDebounce/useDebounce";

interface SearchProps {
  className?: string
}

const SearchInput = memo(({className}: SearchProps) => {
  const dispatch = useAppDispatch();
  const inputValue = useSelector(getSearchValue);

  // const debouncedOnInputChange = useDebounce((value: string) => {
  //   dispatch(searchActions.setValue(value));
  // }, 2000);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const value = event.target.value;
    dispatch(searchActions.setValue(value))
  }, [dispatch]);


  return (
    <div className={classNames(className, classes.Search)}>
      <label className={classes.InputWrapper}>
        <img className={classes.Image} src={SearchIcon} alt="Loupe."/>
        <input
          className={classes.Input}
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={onInputChange}
        />
      </label>
    </div>
  );
});

export default SearchInput;