import {FC} from 'react';
import classNames from "classnames";
import classes from './Header.module.scss';
import AppContainer from "shared/ui/Container/AppContainer";
import Menu from "../Menu";
import Logo from "shared/ui/Logo";
import Nav from "../Nav";
import Search from "shared/ui/Search";
import Contact from "../Contact";
import Delivery from "../Delivery";
import UserBar from "../UserBar";

const Header: FC<HeaderProps> = ({className}: HeaderProps) => {
  return (
    <AppContainer>
      <header className={classNames(className, classes.Header)}>
        <Menu className={classes.Menu} />
        <Logo className={classes.Logo} />
        <Nav className={classes.Nav} />
        <Search className={classes.Search} />
        <Contact className={classes.Contact} />
        <Delivery className={classes.Delivery} />
        <UserBar className={classes.UserBar} />
      </header>
    </AppContainer>
  );
};

interface HeaderProps {
  className?: string
}

export default Header;