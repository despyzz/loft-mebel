import SortIcon from "shared/assets/SortIcon.svg";
import AppButton from "shared/ui/AppButton/AppButton";
import classes from "./SortButton.module.scss";
import {useState} from "react";

const SortButton = () => {
  const [sortCollapsed, setSortCollapsed] = useState(true);
  const toggleSortCollapsed = () => setSortCollapsed(prevState => !prevState);

  return (
    <AppButton
      className={classes.SortButton}
      onClick={toggleSortCollapsed}
    >
      <p>Сортировать</p>
      <img src={SortIcon} alt=""/>

      {
        !sortCollapsed &&
        <div className={classes.Dropdown}>
          <p>
            по убыванию цены
          </p>
          <p>
            по возрастанию цены
          </p>
          <p>
            по популярности
          </p>
        </div>
      }

    </AppButton>
  );
};

export default SortButton;