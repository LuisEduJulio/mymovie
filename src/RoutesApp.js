import React from 'react';
import { useSelector } from 'react-redux';
import createRouter from './routes/Routes';

export default function RoutesApp() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return <Routes />;
}
