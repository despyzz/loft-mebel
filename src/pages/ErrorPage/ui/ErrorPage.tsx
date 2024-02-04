import React from 'react';
import classes from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <div className={classes.ErrorPage}>
      <h1 className={classes.Title}>Что-то пошло не так... Попробуйте перезагрузить страницу.</h1>
      <button
        className={classes.ReloadButton}
        onClick={() => {
          window.location.reload();
        }}>
        reload page
      </button>
    </div>
  );
}

export default ErrorPage;