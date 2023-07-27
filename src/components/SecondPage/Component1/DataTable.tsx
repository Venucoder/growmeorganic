import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef  } from '@mui/x-data-grid';

interface DataRow {
  id: number;
  title: string;
  body: string;
};

const DataTable: React.FC = () => {
  const [data, setData] = useState<DataRow[]>([]);

  useEffect(() => {
    // Replace this URL with the actual API endpoint you want to fetch data from
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'body', headerName: 'Body', flex: 1 },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}      
      />
    </Box>
  );
};

export default DataTable;
