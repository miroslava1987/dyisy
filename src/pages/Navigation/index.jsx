import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { PlayPage } from '../PlayPage';
import {TaskPage} from '../TaskPage';
import { ROUTES } from './routes';

export const Navigation = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.PLAYPAGE} component={PlayPage} />
      <Route exact path={ROUTES.TASKPAGE} component={TaskPage} />
    </Switch>
      
  )
};