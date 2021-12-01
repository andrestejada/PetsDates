import * as React from 'react';
import { GestionCitas } from '../containers/GestionCitas';
import {Layout} from '../../../shared/components/Layout/index';
import { RouteComponentProps } from 'react-router-dom';

const CitasMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Citas" description="Citas de la aplicación"> 
       <GestionCitas/>
  </Layout>
);


export default CitasMainPage;
