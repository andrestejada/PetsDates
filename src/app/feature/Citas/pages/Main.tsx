import * as React from 'react';
import {Layout} from '../../../shared/components/Layout/index';
import { RouteComponentProps } from 'react-router-dom';

const CitasMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Citas" description="Citas de la aplicación"> 
    <h1>Gestiona tus citas</h1>   
  </Layout>
);

CitasMainPage.displayName = 'HomeMainPage';

export default CitasMainPage;
