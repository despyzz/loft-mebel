import AppLink from "../../../../../shared/ui/AppLink/AppLink";
import classes from "./UserBar.module.scss";
import classNames from "classnames";
import WishlistIcon from "shared/assets/WishlistIcon.svg";
import CartIcon from "shared/assets/CartIcon.svg";
import ProfileIcon from "shared/assets/ProfileIcon.svg";

interface UserBarProps {
  className?: string
}

const UserBar = ({className}: UserBarProps) => {
  return (
    <div className={classNames(className, classes.UserBar)}>
      <AppLink to="/wishlist">
        <img src={WishlistIcon} alt="Wishlist."/>
      </AppLink>

      <AppLink to="/cart">
        <img src={CartIcon} alt="Cart."/>
      </AppLink>

      <AppLink to="/profile">
        <img src={ProfileIcon} alt="Profile."/>
      </AppLink>
    </div>
  );
};

export default UserBar;