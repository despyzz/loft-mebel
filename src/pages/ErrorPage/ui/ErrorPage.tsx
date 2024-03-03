import React from 'react';
import classes from './ErrorPage.module.scss';
import AppContainer from "../../../shared/ui/AppContainer/AppContainer";
import {Page} from "../../../widgets/Page";

function ErrorPage() {
  return (
    <Page>
      <AppContainer className={classes.ErrorPage}>
        <h1 className={classes.Title}>Что-то пошло не так... Попробуйте перезагрузить страницу.</h1>
        <button
          className={classes.ReloadButton}
          onClick={() => {
            window.location.reload();
          }}>
          reload page
        </button>
      </AppContainer>
    </Page>
  );
}

export default ErrorPage;