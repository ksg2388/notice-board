import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginNavigationContainer from './containers/LoginNavigationContainer';
import MainNavigationContainer from './containers/MainNavigationContainer';

type Props = {
  root: 'main' | 'login';
};

const RootNavigation = ({ root }: Props) => {
  return (
    <BrowserRouter>
      {root === 'login' && <LoginNavigationContainer />}
      {root === 'main' && <MainNavigationContainer />}
    </BrowserRouter>
  );
};

export default RootNavigation;
