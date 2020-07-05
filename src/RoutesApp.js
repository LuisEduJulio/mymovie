import React from 'react';
import { useSelector } from 'react-redux';
import Routes from './routes';

export default function RoutesApp() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = Routes(signed);

  return <RoutesApp />;
}
