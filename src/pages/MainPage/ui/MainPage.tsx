import classes from './MainPage.module.scss';
import {Promo} from "widgets/Promo"
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Navigation} from "widgets/Navigation";
import {Products} from "widgets/Products";
import {Modal} from "widgets/Modal";
import {useState} from "react";
import AppButton from "shared/ui/AppButton/AppButton";

const MainPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(prevState => !prevState);

  return (
    <div className={classes.MainPage}>
      <Navigation/>
      <AppButton onClick={toggleIsOpen}>
        toggle
      </AppButton>

      <Modal isOpen={isOpen} onClose={toggleIsOpen}>
        <span>
          hello
        </span>
      </Modal>

      <Promo/>

      <AppContainer>
        <Products/>
      </AppContainer>
    </div>
  );
}

export default MainPage;