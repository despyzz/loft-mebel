import classes from './CategorySelector.module.scss'
import classNames from "classnames";
import React, {FC, useEffect, useRef, useState} from "react";

interface SelectorProps  {
  className?: string;
}

const Selector: FC<SelectorProps> = (props: SelectorProps) => {
  const {className} = props;

  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(prevState => !prevState);

  const selectorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && event.target !== selectorRef.current)
        setActive(false);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={classNames(className, classes.Selector)}
      onClick={toggleActive}
      ref={selectorRef}
    >
      <div className={classes.Title}>Категория</div>
      {
        active && <div className={classes.Dropdown}>
          <div>Категория 1</div>
          <div>Категория 2</div>
          <div>Категория 3</div>
          <div>Категория 4</div>
          <div>Категория 5</div>
          <div>Категория 6</div>
        </div>
      }
    </div>
  );
}

const CategorySelector = () => {
  return (
    <div className={classes.CategorySelector}>
      <Selector/>
      <Selector/>
    </div>
  );
};

export default CategorySelector;