import classes from './ProfilePage.module.scss'
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {BonusProgram} from "./BonusProgram";
import {PersonalData} from "./PersonalData";
import {Orders} from "./Orders";
import {Navigation} from "widgets/Navigation";
import {fetchProfileData, profileReducer} from "entities/Profile";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useEffect} from "react";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {Page} from "widgets/Page";

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <Page>
      <DynamicModuleLoader reducers={{profile: profileReducer}}>
        <div className={classes.ProfilePage}>
          <Navigation/>
          <BonusProgram/>
          <AppContainer className={classes.Group}>
            <PersonalData className={classes.PersonalData}/>
            <Orders className={classes.Orders}/>
          </AppContainer>
        </div>
      </DynamicModuleLoader>
    </Page>
  );
};

export default ProfilePage;