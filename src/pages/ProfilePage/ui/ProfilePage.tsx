import classes from './ProfilePage.module.scss'
import AppContainer from "shared/ui/AppContainer/AppContainer";

import {BonusProgram} from "./BonusProgram";
import {PersonalData} from "./PersonalData";
import {Orders} from "./Orders";
import {Navigation} from "widgets/Navigation";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from "entities/Profile";

const reducers: ReducerList = {
  profile: profileReducer
}

const ProfilePage = () => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classes.ProfilePage}>
        <Navigation/>
        <BonusProgram/>
        <AppContainer className={classes.Group}>
          <PersonalData className={classes.PersonalData}/>
          <Orders className={classes.Orders}/>
        </AppContainer>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;