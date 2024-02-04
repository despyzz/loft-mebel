import AppLink from "shared/ui/AppLink/AppLink";
import classes from './Logo.module.scss';
import classNames from "classnames";
import LogoImage from "shared/assets/Logo.svg";

interface LogoProps {
  className?: string
}

const Logo = ({className}: LogoProps) => {
  return (
    <AppLink className={classNames(className)} to={"/"}>
      <div className={classes.ImgWrapper}>
        <img className={classes.Img} src={LogoImage} alt="Site logo."/>
      </div>
    </AppLink>
  );
};

export default Logo;