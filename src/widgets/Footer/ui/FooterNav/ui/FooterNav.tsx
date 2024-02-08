import classes from './FooterNav.module.scss';
import AppLink from "../../../../../shared/ui/AppLink/AppLink";
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
              <AppLink className={classes.Link} to={'/'}>Кухни</AppLink>
            </li>
            <li>
              <AppLink className={classes.Link} to={'/'}>Спальни</AppLink>
            </li>
            <li>
              <AppLink className={classes.Link} to={'/'}>Гостиные</AppLink>
            </li>
          </div>

          <div className={classes.LinksColumn}>
            <li>
              <AppLink className={classes.Link} to={'/'}>Прихожие</AppLink>
            </li>
            <li>
              <AppLink className={classes.Link} to={'/'}>Офисная мебель</AppLink>
            </li>
            <li>
              <AppLink className={classes.Link} to={'/'}>Детская</AppLink>
            </li>
          </div>

          <div className={classes.LinksColumn}>
            <li>
              <AppLink className={classes.Link} to={'/'}>Шкафы</AppLink>
            </li>
            <li>
              <AppLink className={classes.Link} to={'/'}>Матрасы</AppLink>
            </li>
            <li>
              <AppLink className={classes.Link} to={'/'}>Мягкая мебель</AppLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default FooterNav;