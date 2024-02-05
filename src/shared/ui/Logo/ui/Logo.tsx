import AppLink from "../../Link/AppLink";
import classes from './Logo.module.scss';
import classNames from "classnames";
import LogoImage from "../../../assets/Logo.svg";

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