import AppButton from "shared/ui/AppButton/AppButton";
import MenuIcon from "shared/assets/MenuIcon.svg";
import classes from './Menu.module.scss';
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import CloseIcon from "shared/assets/CloseIcon.svg";
import MainIcon from "shared/assets/categories/MainIcon.svg";
import AboutIcon from "shared/assets/categories/AboutIcon.svg";
import ContactsIcon from "shared/assets/categories/ContactsIcon.svg";
import AppLink from "shared/ui/AppLink/AppLink";
import {useLocation} from "react-router-dom";
import {Category} from "entities/Category/model/types/category";
import {CategoryItem} from "entities/Category";


interface MenuProps {
  className?: string
  categories: Array<Category>
  isLoading?: boolean
  error?: string
}

const Menu = (props: MenuProps) => {
  const {
    className,
    categories,
  } = props;

  const [dropdownCollapsed, setDropdownCollapsed] = useState(true);
  const dropdownClass = dropdownCollapsed ? classes.DropdownCollapsed : undefined;
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation()

  const toggleDropdownCollapsed = () => setDropdownCollapsed(prev => !prev);

  // scrolling
  useEffect(() => {
    if (dropdownCollapsed)
      document.body.style.overflow = 'auto';
    else
      document.body.style.overflow = 'hidden';
  }, [dropdownCollapsed]);

  // close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
        setDropdownCollapsed(true);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // close on change path
  useEffect(() => {
    setDropdownCollapsed(true);
  }, [location]);

  return (
    <div className={className}>

      <AppButton onClick={toggleDropdownCollapsed}>
        <img src={MenuIcon} alt={"Hamburger menu."}/>
      </AppButton>

      <div
        className={classNames(classes.Dropdown, dropdownClass)}
        ref={dropdownRef}
      >
        <div className={classes.DropdownContent}>

          <AppButton
            className={classes.CloseButton}
            onClick={toggleDropdownCollapsed}
          >
            <img src={CloseIcon} alt={"Close dropdown window button."}/>
          </AppButton>

          <div className={classes.Block}>
            <div className={classes.Title}>
              Меню
            </div>

            <div className={classes.Content}>
              <AppLink className={classes.Element} to={"/"}>
                <div className={classes.ImgWrapper}>
                  <img src={MainIcon} alt="Main page."/>
                </div>
                <span>Главная</span>
              </AppLink>

              <AppLink className={classes.Element} to={"/about"}>
                <div className={classes.ImgWrapper}>
                  <img src={AboutIcon} alt="About us page."/>
                </div>
                <span>О нас</span>
              </AppLink>

              <AppLink className={classes.Element} to={"/contacts"}>
                <div className={classes.ImgWrapper}>
                  <img src={ContactsIcon} alt="Contacts page."/>
                </div>
                <span>Контакты</span>
              </AppLink>

              {
                categories.map((category) => (
                  <CategoryItem
                    key={category.id}
                    className={classes.Element}
                    category={category}
                  />
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Menu;