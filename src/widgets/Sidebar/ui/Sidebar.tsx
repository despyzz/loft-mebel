import React, {FC, useState} from 'react';
import classNames from "classnames";
import classes from "./Sidebar.module.scss";
import AppButton from "../../../shared/ui/AppButton/AppButton";

interface SidebarProps {
  className?: string
}

const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
  const {className} = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed(prev => !prev);

  return (
      <div className={
        classNames(
          className,
          classes.Sidebar,
          collapsed ? classes.collapsed : undefined
        )}
      >
        <AppButton onClick={onToggle}>
          toggle
        </AppButton>
      </div>
    );
  };

export default Sidebar;