import classes from './NotFoundPage.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {Page} from 'widgets/Page';

const NotFoundPage = () => {
  return (
    <Page>
      <AppContainer>
        <h1 className={classes.title}>Not Found Page</h1>
      </AppContainer>
    </Page>
  );
}

export default NotFoundPage;