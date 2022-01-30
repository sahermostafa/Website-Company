import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function Table4(props) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'LifterModel', headerName: 'Lifter Model', width: 130 },
        { field: 'PowerSource', headerName: 'Power Source', width: 130 },
        { field: 'WheelType', headerName: 'Wheel Type', width: 130 },
        { field: 'counterweight', headerName: 'Counterweight', width: 130 },
      ];
      const rows = props.data;
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}