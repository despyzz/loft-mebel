import React, {memo} from 'react';
import classes from './CategoryItem.module.scss';
import classNames from "classnames";
import {Category} from "../../model/types/category";
import AppLink from "shared/ui/AppLink/AppLink";
import SaleIcon from 'shared/assets/categories/SaleIcon.svg'

interface CategoryItemProps {
  className?: string;
  category: Category
}

const CategoryItem = memo((props: CategoryItemProps) => {
  const {
    className,
    category
  } = props;

  const { name, url} = category

  return (
    <AppLink
      className={classNames(className, classes.Category)}
      to={`/catalog/${url}`}
    >
      <img
        className={classes.CategoryIcon}
        // src={icon}
        src={SaleIcon}
        alt={`Иконка категории: ${name}`}
      />
      <span className={classes.CategoryName}>
        {name}
      </span>
    </AppLink>
  );
});

export default CategoryItem;