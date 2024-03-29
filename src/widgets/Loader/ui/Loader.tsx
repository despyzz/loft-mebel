import classNames from "classnames";
import classes from './Loader.module.scss';

interface LoaderProps {
  className?: string
}

const Loader = ({className}: LoaderProps) => {
  return (
    <div className={classNames(className, classes.Loader)}/>
  );
};

export default Loader;