import {FC} from 'react';
import classNames from "classnames";
import classes from './Header.module.scss';

import AppContainer from "shared/ui/AppContainer/AppContainer";

import UserBar from "entities/UserBar";
import Search from "entities/Search";
import Menu from "entities/Menu";
import Logo from "entities/Logo";
import Delivery from "entities/Delivery";
import Nav from "entities/Nav";
import Contact from "entities/Contact";

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