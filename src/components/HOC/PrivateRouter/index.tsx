import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
interface Props {
  isAuthenticated: boolean
  path: string
  component: any
}
export const MainPageRoute: FC<Props> = ({ component, isAuthenticated, ...rest }: any) => {
  const routeComponent = (props: any) => (
    isAuthenticated
      ? React.createElement(component, props)
      : <Redirect to='/login' />

  );
  return <Route {...rest} render={routeComponent} />;
};

export const LoginPageRoute: FC<Props> = ({ component, isAuthenticated, ...rest }: any) => {
  const routeComponent = (props: any) => (
    !isAuthenticated
      ? React.createElement(component, props)
      : <Redirect to='/mainpage' />
  );
  return <Route {...rest} render={routeComponent} />;
};
