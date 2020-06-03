import React from 'react';
import { Animals } from '../enum/Form';
import Search from "../components/forms/Search";

const Dashboard: React.FC = (props) => {
  return (
      <Search animal={Animals.cat} ages={[0,5]} />
  );
};

export default Dashboard;