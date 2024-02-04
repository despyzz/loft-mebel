import AppButton from "shared/ui/AppButton/AppButton";
import MenuIcon from "shared/assets/MenuIcon.svg";
import classes from './Menu.module.scss';
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";

import CloseIcon from "shared/assets/CloseIcon.svg";

// navigation
import MainIcon from "shared/assets/categories/MainIcon.svg";
import AboutIcon from "shared/assets/categories/AboutIcon.svg";
import ContactsIcon from "shared/assets/categories/ContactsIcon.svg";

// categories
// import KitchenIcon from "shared/assets/categories/KitchetIcon.svg";
// import BedroomIcon from "shared/assets/categories/BedroomIcon.svg";
// import LivingRoomIcon from "shared/assets/categories/LivingroomIcon.svg";
// import ClosetIcon from "shared/assets/categories/ClosetIcon.svg";
// import OfficeIcon from "shared/assets/categories/OfficeIcon.svg";
// import ChildrenRoom from "shared/assets/categories/ChildrensroomIcon.svg";
// import SaleIcon from "shared/assets/categories/SaleIcon.svg";
// import NewIcon from "shared/assets/categories/NewIcon.svg";
// import MattressIcon from "shared/assets/categories/MattressIcon.svg";
// import ArmchairIcon from "shared/assets/categories/ArmchariIcon.svg";
// import CupboardIcon from "shared/assets/categories/CupboardIcon.svg";
import AppLink from "shared/ui/AppLink/AppLink";
import {useLocation} from "react-router-dom";


interface MenuProps {
  className?: string
}

const Menu = ({className}: MenuProps) => {
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
        <img src={MenuIcon} alt={"Hamburger menu."} />
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
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Menu;