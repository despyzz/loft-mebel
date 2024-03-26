import React, {memo} from 'react';
import classes from './CategoryItem.module.scss';
import classNames from "classnames";
import {Category} from "../../model/types/category";
import AppLink from "shared/ui/AppLink/AppLink";
import SaleIcon from 'shared/assets/categories/SaleIcon.svg'

interface CategoryItemProps {
  className?: string;
  iconWrapperClassname?: string;
  category: Category
}

const CategoryItem = memo((props: CategoryItemProps) => {
  const {
    className,
    iconWrapperClassname,
    category
  } = props;

  const { name} = category

  return (
    <AppLink
      className={classNames(className, classes.Category)}
      to={`/catalog/?category=${category.id}`}
    >
      <div className={iconWrapperClassname}>
        <img
          className={classes.CategoryIcon}
          // src={category.icon}
          src={SaleIcon}
          alt={`Иконка категории: ${name}`}
        />
      </div>

      <span className={classes.CategoryName}>
        {name}
      </span>
    </AppLink>
  );
});

export default CategoryItem;