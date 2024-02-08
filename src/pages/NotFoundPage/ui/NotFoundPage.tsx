import classes from './NotFoundPage.module.scss';
import AppContainer from "../../../shared/ui/AppContainer/AppContainer";

const NotFoundPage = () => {
  return (
    <AppContainer>
      <h1 className={classes.title}>Not Found Page</h1>
    </AppContainer>
  );
}

export default NotFoundPage;