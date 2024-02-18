import React, {useEffect, useState} from 'react';
import AppButton from "shared/ui/AppButton/AppButton";
import classes from './FilterButton.module.scss';
import {Filter} from "widgets/Filter";

const FilterButton = () => {
  const [filterCollapsed, setFilterCollapsed] = useState(true);
  const toggleFilterCollapsed = () => setFilterCollapsed(prevState => !prevState);

  useEffect(() => {
    if (!filterCollapsed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [filterCollapsed]);


  return (
    <>
      <AppButton
        className={classes.FilterButton}
        onClick={toggleFilterCollapsed}
      >
        Фильтр
      </AppButton>
      {
        !filterCollapsed &&
        <div className={classes.FilterWrapper}>
          <div className={classes.Header}>

            <div className={classes.Title}>
              Фильтр
            </div>

            <AppButton
              className={classes.CloseButton}
              onClick={toggleFilterCollapsed}

            >
              ×
            </AppButton>

          </div>
          <Filter className={classes.Filter}/>
        </div>
      }
    </>

  );
};

export default FilterButton;