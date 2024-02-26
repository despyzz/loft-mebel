import React from 'react';
import classes from './ProfileCard.module.scss';
import {useSelector} from "react-redux";
import {getProfileData} from "../../model/selectors/getProfileData";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {profileReducer} from "../../model/slice/profileSlice";

const reducers = {
  profile: profileReducer
}

const ProfileCard = () => {
  const data = useSelector(getProfileData);

  return (
    <></>
  );
};

export default ProfileCard;