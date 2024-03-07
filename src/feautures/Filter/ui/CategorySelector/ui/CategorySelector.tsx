import classes from './CategorySelector.module.scss'
import classNames from "classnames";
import {memo, useRef, useState} from "react";
import {categoriesListReducer, Category, getCategoryListData, getCategoryListError} from "entities/Category";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useSelector} from "react-redux";
import Loader from "widgets/Loader";
import AppButton from "shared/ui/AppButton/AppButton";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {filterActions, filterReducer} from "../../../model/slices/filterSlice";

interface CategorySelectorProps {
  className?: string;
}

const reducers: ReducerList = {
  categoryList: categoriesListReducer,
  filter: filterReducer,
}

const CategorySelector = memo((props: CategorySelectorProps) => {
  const {className} = props;
  const dispatch = useAppDispatch();

  // get categories
  const categoriesData = useSelector(getCategoryListData);
  const categoriesIsLoading = useSelector(getCategoryListError);
  const categoriesError = useSelector(getCategoryListError);

  const onCategoryClick = (category: Category) => {
    return () => {
      dispatch(filterActions.setCategory(category))
      setActive(false)

      console.log(category);
    }
  }

  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(prevState => !prevState);

  const selectorRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (selectorRef.current && event.target !== selectorRef.current)
  //       setActive(false);
  //   };
  //
  //   document.addEventListener('mousedown', handleClickOutside);
  //
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  if (categoriesIsLoading) {
    return <Loader/>
  }

  if (categoriesError) {
    return <p>Произошла ошибка при загрузке категорий</p>
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(className, classes.CategorySelector)}>
        <div
          className={classes.Selector}
          onClick={toggleActive}
          ref={selectorRef}
        >
          <div className={classes.Title}>Категория</div>
          {
            active &&
            <div className={classes.Dropdown}>
              {
                categoriesData.map((category) => (
                  <AppButton
                    key={category.id}
                    onClick={onCategoryClick(category)}
                  >
                    {category.name}
                  </AppButton>
                ))
              }
            </div>
          }
        </div>
      </div>
    </DynamicModuleLoader>
  );
});

export default CategorySelector;