import AppLink from "shared/ui/AppLink/AppLink";
import classes from "./UserBar.module.scss";
import classNames from "classnames";
import WishlistIcon from "shared/assets/WishlistIcon.svg";
import CartIcon from "shared/assets/CartIcon.svg";
import ProfileIcon from "shared/assets/ProfileIcon.svg";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import AppButton from "shared/ui/AppButton/AppButton";
import {useState} from "react";

interface UserBarProps {
  className?: string
}

const UserBar = ({className}: UserBarProps) => {
  const authData = useSelector(getUserAuthData);

  const [isAuthModal, setIsAuthModal] = useState(false);
  const closeAuthModal = () => setIsAuthModal(false);
  const openAuthModal = () => setIsAuthModal(true);

  if (authData) {
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
  }

  return (
    <div className={classNames(className, classes.UserBar)}>
      <AppButton onClick={openAuthModal}>
        <img src={WishlistIcon} alt="Wishlist."/>
      </AppButton>

      <AppButton onClick={openAuthModal}>
        <img src={CartIcon} alt="Cart."/>
      </AppButton>

      <AppButton onClick={openAuthModal}>
        <img src={ProfileIcon} alt="Profile."/>
      </AppButton>

      <LoginModal
        isOpen={isAuthModal}
        onClose={closeAuthModal}
      />
    </div>
  )

};

export default UserBar;