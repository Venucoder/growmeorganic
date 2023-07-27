import React from 'react';
import DataTable from './Component1/DataTable';
import DepartmentList from './Component2/DepartmentList';

const SecondPage: React.FC = () => {
  return (
    <div>
      <h1>Second Page</h1>
      <h2 >Data Table</h2>
      <DataTable />
      <h2>Department List</h2>
      <DepartmentList />
    </div>
  );
};

export default SecondPage;
