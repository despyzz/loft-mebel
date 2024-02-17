import classes from './ProfilePage.module.scss'
import AppContainer from "shared/ui/AppContainer/AppContainer";

import {BonusProgram} from "./BonusProgram";
import {PersonalData} from "./PersonalData";
import {Orders} from "./Orders";
import {Navigation} from "../../../widgets/Navigation";

const ProfilePage = () => {
  return (
    <div className={classes.ProfilePage}>
      <Navigation />
      <BonusProgram />
      <AppContainer className={classes.Group}>
        <PersonalData className={classes.PersonalData}/>
        <Orders className={classes.Orders} />
      </AppContainer>
    </div>
  );
};

export default ProfilePage;