import React, {FC} from 'react';
import classNames from "classnames";

interface FooterProps {
  className?: string
}

const Footer: FC<FooterProps> = ({className}: FooterProps) => {
  return (
    <footer className={classNames(className)}>

    </footer>
  );
};

export default Footer;