import classes from './MobileCatalog.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Products} from "widgets/Products";

const MobileCatalog = () => {
  return (
    <AppContainer>
      <Products />
    </AppContainer>
  );
};

export default MobileCatalog;