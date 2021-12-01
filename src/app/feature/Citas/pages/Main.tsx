import * as React from 'react';
import { GestionCitas } from '../containers/GestionCitas';
import {Layout} from '../../../shared/components/Layout/index';

const CitasMainPage = () => (
  <Layout title="Citas" description="Citas de la aplicación"> 
       <GestionCitas/>
  </Layout>
);


export default CitasMainPage;
