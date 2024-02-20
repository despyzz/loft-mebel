import classes from './MainPage.module.scss';
import {Promo} from "widgets/Promo"
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Navigation} from "widgets/Navigation";
import {Products} from "widgets/Products";
import AppButton from "shared/ui/AppButton/AppButton";
import {useState} from "react";
import {LoginModal} from "../../../feautures/AuthByUsername";

const MainPage = () => {

  const [isAuthModal, setIsAuthModal] = useState(false);
  const closeIsAuthModal = () => setIsAuthModal(false);
  const openIsAuthModal = () => setIsAuthModal(true);


  return (
    <div className={classes.MainPage}>

      <AppContainer>
        <AppButton
          style={{border: "1px solid grey", padding: "15px", color: "grey", fontSize: "16px"}}
          onClick={openIsAuthModal}
        >
          show login modal
        </AppButton>
      </AppContainer>

      <LoginModal
        isOpen={isAuthModal}
        onClose={closeIsAuthModal}
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