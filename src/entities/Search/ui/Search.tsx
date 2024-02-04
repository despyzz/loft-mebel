import classes from './Search.module.scss';
import classNames from "classnames";
import SearchIcon from "shared/assets/SearchIcon.svg";

interface SearchProps {
  className?: string
}

const Search = ({className}: SearchProps) => {
  return (
    <div className={classNames(className, classes.Search)}>
      <label className={classes.InputWrapper}>
        <img className={classes.Image} src={SearchIcon} alt="Loupe."/>
        <input className={classes.Input} type="text" placeholder="Search"/>
      </label>
    </div>
  );
};

export default Search;