import {isValidElement, ReactNode} from 'react';
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {Navigate, useLocation} from "react-router-dom";
import {RoutePath} from "shared/config/AppRouterConfig/AppRouterConfig";

interface RequireAuthProps {
  children: ReactNode
}

const RequireAuth = (props: RequireAuthProps) => {
  const {
    children,
  } = props;

  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate to={RoutePath.main} state={{from: location}} replace/>
    );
  }

  if (isValidElement(children)) {
    return children;
  } else {
    return null;
  }
};

export default RequireAuth;