import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'LifterModel', headerName: 'Lifter Model', width: 130 },
  { field: 'PowerSource', headerName: 'Power Source', width: 130 },
  { field: 'WheelType', headerName: 'Wheel Type', width: 130 },
  { field: 'counterweight', headerName: 'Counterweight', width: 130 },
];

const rows = [
  {id: 1, LifterModel:'STD-Standard', PowerSource: 'COMB-Combustion', WheelType:'c-Cushion', counterweight: "1.000 kg" },
  {id: 2, LifterModel:'HVY-Heavy', PowerSource: 'COMB-Combustion', WheelType: 'c-Cushion', counterweight: "2.000 kg" },
  {id: 3, LifterModel: 'STD-Standard', PowerSource: 'ELEC-Electrical', WheelType: 'c-Cushion', counterweight: "1.000 kg" },
  {id: 4, LifterModel: 'HVY-Heavy', PowerSource: 'ELEC-Electrical', WheelType: 'p-pneumatic', counterweight:"5.000 kg" },
];

function Table1() {
  return (
    <div style={{ height: 325, width: '60%',marginLeft:'auto',marginRight:'auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
export default Table1;