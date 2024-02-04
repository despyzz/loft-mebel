import AppLink from "shared/ui/AppLink/AppLink";
import classes from "./Nav.module.scss";

interface NavbarProps {
  className?: string
}

const Nav = ({className}: NavbarProps) => {
  return (
    <nav className={className}>
      <ul className={classes.Links}>
        <AppLink className={classes.Link} to="/">Главная</AppLink>
        <AppLink className={classes.Link} to="/about">О нас</AppLink>
        <AppLink className={classes.Link} to="/contacts">Контакты</AppLink>
      </ul>
    </nav>
  );
};

export default Nav;