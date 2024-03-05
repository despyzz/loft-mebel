import classes from './Navigation.module.scss';
import EtcIcon from 'shared/assets/Etc.svg';
import {memo, useCallback, useEffect, useRef, useState} from "react";
import AppLink from "shared/ui/AppLink/AppLink";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  categoriesListReducer,
  CategoryItem,
  fetchCategoriesList,
  getCategoryListData,
  getCategoryListError
} from "entities/Category";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import classNames from "classnames";
import Loader from "widgets/Loader";

type EtcItem = {
  link: string,
  name: string
}

const reducers: ReducerList = {
  categoryList: categoriesListReducer
}

const Navigation = memo(() => {
  const dispatch = useAppDispatch();

  // get categories
  const categories = useSelector(getCategoryListData);
  const isLoading = useSelector(getCategoryListError);
  const error = useSelector(getCategoryListError);

  useEffect(() => {
    dispatch(fetchCategoriesList())
  }, [dispatch]);

  // resize navigation
  const navRef = useRef<HTMLDivElement>(null);
  const etcRef = useRef<HTMLDivElement>(null);

  const handleResize = useCallback(() => {
    if (!navRef.current || !etcRef.current)
      return

    const navWidth = navRef.current.offsetWidth;
    const etcWidth = etcRef.current.offsetWidth;
    const gapWidth = parseInt(window.getComputedStyle(navRef.current).getPropertyValue('gap'), 10)

    const items = document.querySelectorAll<HTMLDivElement>(`.${classes.Item}`);

    if (window.innerWidth >= 768) {
      for (let item of items) {
        item.classList.remove(classes.Hidden);
      }

      let itemsWidth = 0;
      for (const item of items) {
        const itemWidth = item.offsetWidth;
        itemsWidth += itemWidth + gapWidth;

        if (itemsWidth > navWidth - etcWidth) {
          item.classList.add(classes.Hidden)
        }
      }
    }
  }, []);

  // resize navigation block
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);
  handleResize();

  // hidden items
  const [etcItems, setEtcItems] = useState<Array<EtcItem>>([]);

  const clearEtcItems = useCallback(() => setEtcItems([]), []);
  const addEtcItem = useCallback((item: HTMLDivElement) => {
    const link = item.getAttribute('href');
    const title = item.querySelector('span');

    if (link && title) {
      const name = title.innerText;
      setEtcItems((prevState) => [...prevState, {link, name}])
    }
  }, []);

  // hidden items dropdown
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onEtcClick = () => {
    if (dropdownVisible) {
      setDropdownVisible(false);
    } else {
      clearEtcItems();

      const items = document.querySelectorAll(`.${classes.Item}`);
      items.forEach((item) => {
        if (item.classList.contains(classes.Hidden)) {
          addEtcItem(item as HTMLDivElement);
        }
      })

      setDropdownVisible(true);
    }
  }

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
      setDropdownVisible(false);
  }, [])


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);


  if (error) {
    return (
      <div ref={navRef} className={classes.Navigation}>
        <div>
          Не удалось загрузить список категорий
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div ref={navRef} className={classes.Navigation}>
        <Loader/>
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div ref={navRef} className={classes.Navigation}>
        {
          categories && categories.map((category) => (
            <CategoryItem
              className={classNames(classes.Item, classes.Hidden)}
              category={category}
              key={category.id}
            />
          ))
        }

        <div ref={etcRef} className={classes.Etc} onClick={onEtcClick}>
          <img src={EtcIcon} alt=""/>
          {
            dropdownVisible &&
            <div className={classes.DropdownMenu} ref={dropdownRef}>
              {etcItems.map((item, index) => (
                <AppLink className={classes.DropdownItem} to={item.link} key={index}>
                  {item.name}
                </AppLink>
              ))}
            </div>
          }
        </div>

      </div>
    </DynamicModuleLoader>
  );
});

export {Navigation};