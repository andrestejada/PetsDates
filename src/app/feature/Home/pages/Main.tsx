import * as React from 'react';
import {Layout} from '../../../shared/components/Layout/index';
import { RouteComponentProps } from 'react-router-dom';

const HomeMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Home" description="Home de la aplicación"> 
    <h1>Bienvenido a PetsApp</h1>   
  </Layout>
);

export default HomeMainPage;
