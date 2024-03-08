import SortIcon from "shared/assets/SortIcon.svg";
import AppButton from "shared/ui/AppButton/AppButton";
import classes from "./Sort.module.scss";
import {memo, useState} from "react";
import {SortTypes} from "../model/types/sort";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {sortActions, sortReducer} from "../model/slices/sortSlice";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";

const reducers: ReducerList = {
  sort: sortReducer
}

const Sort = memo(() => {
  const dispatch = useAppDispatch();
  const [sortCollapsed, setSortCollapsed] = useState(true);
  const toggleSortCollapsed = () => setSortCollapsed(prevState => !prevState);

  const setSortType = (type: SortTypes) => {
    return () => {
      dispatch(sortActions.setType(type));
    }
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <AppButton
        className={classes.SortButton}
        onClick={toggleSortCollapsed}
      >
        <p>Сортировать</p>
        <img src={SortIcon} alt=""/>

        {
          !sortCollapsed &&
          <div className={classes.Dropdown}>
            <p onClick={setSortType(SortTypes.descending)}>
              по убыванию цены
            </p>
            <p onClick={setSortType(SortTypes.ascending)}>
              по возрастанию цены
            </p>
            <p onClick={setSortType(SortTypes.popularity)}>
              по популярности
            </p>
          </div>
        }

      </AppButton>
    </DynamicModuleLoader>
  );
});

export default Sort;