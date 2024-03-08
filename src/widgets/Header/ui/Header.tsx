import {FC, useEffect} from 'react';
import classNames from "classnames";
import classes from './Header.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import Menu from "./Menu";
import Logo from "shared/ui/Logo";
import Nav from "./Nav";
import Contact from "./Contact";
import Delivery from "./Delivery";
import UserBar from "./UserBar";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  categoriesListReducer,
  fetchCategoriesList,
  getCategoryListData,
  getCategoryListError,
  getCategoryListIsLoading
} from "entities/Category";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {SearchInput} from "feautures/Search";

const reducers: ReducerList = {
  categoryList: categoriesListReducer
}

const Header: FC<HeaderProps> = ({className}: HeaderProps) => {
  const dispatch = useAppDispatch();

  const categories = useSelector(getCategoryListData);
  const error = useSelector(getCategoryListError);
  const isLoading = useSelector(getCategoryListIsLoading);

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classes.Header}/>
      <div className={classes.HeaderWrapper}>
        <AppContainer>
          <header className={classNames(className, classes.Header)}>
            <Menu
              className={classes.Menu}
              categories={categories}
              isLoading={isLoading}
              error={error}
            />
            <Logo className={classes.Logo}/>
            <Nav className={classes.Nav}/>
            <SearchInput className={classes.Search}/>
            <Contact className={classes.Contact}/>
            <Delivery className={classes.Delivery}/>
            <UserBar className={classes.UserBar}/>
          </header>
        </AppContainer>
      </div>
    </DynamicModuleLoader>
  );
};

interface HeaderProps {
  className?: string
}

export default Header;