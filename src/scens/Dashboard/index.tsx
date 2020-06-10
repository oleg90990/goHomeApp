import React from 'react';
import Search from "../../components/forms/Search";
import { IDashboardProps } from "./types";
import { Content } from 'native-base';

const Dashboard: React.FC<IDashboardProps> = (props) => {
  return (
    <Content padder>
      <Search />
    </Content>
  );
};

export default Dashboard;