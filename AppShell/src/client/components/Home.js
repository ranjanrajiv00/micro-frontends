import React from 'react';
import Loadable from 'react-loadable';
import PreLoading from '../utils/PreLoading';

const LoadableComponent = Loadable({
  loader: () => {
    return new Promise((resolve, reject) => {
      PreLoading(`/cart`).then((amdModule) => {
        resolve(amdModule.Component);
      });
    });
  },
  loading: () => "Loading...",
});

const Home = () => {
  return (
    <LoadableComponent />
  );
};

export default Home;