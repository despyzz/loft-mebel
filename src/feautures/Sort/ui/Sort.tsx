import SortIcon from "shared/assets/SortIcon.svg";
import AppButton from "shared/ui/AppButton/AppButton";
import classes from "./Sort.module.scss";
import {memo, useEffect, useRef, useState} from "react";
import {SortTypes} from "../model/types/sort";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {sortActions, sortReducer} from "../model/slices/sortSlice";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getSortTypes} from "../model/selectors/sortSelectors";

const reducers: ReducerList = {
  sort: sortReducer
}

const sortTypeNames = [
  'по убыванию цены',
  'по возрастанию цены',
]

const Sort = memo(() => {
  const dispatch = useAppDispatch();
  const [sortCollapsed, setSortCollapsed] = useState(true);
  const toggleSortCollapsed = () => setSortCollapsed(prevState => !prevState);

  const sortType = useSelector(getSortTypes);
  const sortTypeName = sortType !== undefined ? sortTypeNames[sortType] : undefined

  const setSortType = (type: SortTypes) => {
    return () => {
      dispatch(sortActions.setType(type));
      setSortCollapsed(true);
    }
  }

  const dropdownRef = useRef<HTMLDivElement>(null)
  const toggleDropdownRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        toggleDropdownRef.current &&
        !toggleDropdownRef.current.contains((event.target as Node))
      ) {
        setSortCollapsed(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <AppButton
        className={classes.SortButton}
      >
        <div
          className={classes.SortButtonContent}
          onClick={toggleSortCollapsed}
          ref={toggleDropdownRef}
        >
          <p
          >
            {
              sortTypeName ? sortTypeName : "Сортировать"
            }
          </p>
          <img src={SortIcon} alt=""/>
        </div>
        {
          !sortCollapsed &&
          <div className={classes.Dropdown} ref={dropdownRef}>
            <p onClick={setSortType(SortTypes.descending)}>
              по убыванию цены
            </p>
            <p onClick={setSortType(SortTypes.ascending)}>
              по возрастанию цены
            </p>
          </div>
        }

      </AppButton>
    </DynamicModuleLoader>
  );
});

export default Sort;