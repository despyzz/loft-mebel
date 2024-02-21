import classes from './MainPage.module.scss';
import {Promo} from "widgets/Promo"
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Navigation} from "widgets/Navigation";
import {Products} from "widgets/Products";
import AppButton from "shared/ui/AppButton/AppButton";
import {useCallback, useState} from "react";
import {LoginModal} from "feautures/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";

const MainPage = () => {

  const dispatch = useDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);
  const closeAuthModal = () => setIsAuthModal(false);
  const openAuthModal = () => setIsAuthModal(true);

  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={classes.MainPage}>
        <AppContainer>
          <AppButton
            style={{border: "1px solid grey", padding: "15px", color: "grey", fontSize: "16px"}}
            onClick={onLogout}
          >
            LOGOUT
          </AppButton>
        </AppContainer>
        <Navigation/>
        <Promo/>
        <AppContainer>
          <Products/>
        </AppContainer>
      </div>
    );
  }

  return (
    <div className={classes.MainPage}>
      <AppContainer>
        <AppButton
          style={{border: "1px solid grey", padding: "15px", color: "grey", fontSize: "16px"}}
          onClick={openAuthModal}
        >
          LOGIN
        </AppButton>
      </AppContainer>

      <LoginModal
        isOpen={isAuthModal}
        onClose={closeAuthModal}
      />
      <Navigation/>
      <Promo/>
      <AppContainer>
        <Products/>
      </AppContainer>
    </div>
  );
}

export default MainPage;