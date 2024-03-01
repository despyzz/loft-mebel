import {isValidElement, ReactNode} from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {RoutePath} from "shared/config/AppRouterConfig/AppRouterConfig";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";

interface RequireAuthProps {
  children: ReactNode
}

const RequireAuth = (props: RequireAuthProps) => {
  const {
    children,
  } = props;

  const authLocal = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  const location = useLocation();

  if (!authLocal) {
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