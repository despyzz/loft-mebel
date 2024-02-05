import classes from './FooterNav.module.scss';
import AppLink from "../../../../../shared/ui/Link/AppLink";
import React from "react";

interface FooterNavProps {
  className?: string
}

const FooterNav = ({className}: FooterNavProps) => {
  return (
    <div className={className}>
      <nav className={classes.Nav}>
        <h2 className={classes.Title}>
          Навигация
        </h2>
        <ul className={classes.NavLinks}>
          <div className={classes.LinksColumn}>
            <li>
              <AppLink to={'/'}>Кухни</AppLink>
            </li>
            <li>
              <AppLink to={'/'}>Спальни</AppLink>
            </li>
            <li>
              <AppLink to={'/'}>Гостиные</AppLink>
            </li>
          </div>

          <div className={classes.LinksColumn}>
            <li>
              <AppLink to={'/'}>Прихожие</AppLink>
            </li>
            <li>
              <AppLink to={'/'}>Офисная мебель</AppLink>
            </li>
            <li>
              <AppLink to={'/'}>Детская</AppLink>
            </li>
          </div>

          <div className={classes.LinksColumn}>
            <li>
              <AppLink to={'/'}>Шкафы</AppLink>
            </li>
            <li>
              <AppLink to={'/'}>Матрасы</AppLink>
            </li>
            <li>
              <AppLink to={'/'}>Мягкая мебель</AppLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default FooterNav;