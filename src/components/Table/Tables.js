import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Box from '@material-ui/core/Box';
import {useSelector} from "react-redux";

function createData(Variant_Table,  Description) {
  return { Variant_Table , Description };
}



export default function Tables() {
  const {table1} = useSelector(state => state.table1);

  return (
    <Box my="3rem" pt={3}>
      <TableContainer component={Paper} m={2}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell  colSpan={3}>Variant_Table</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table1.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  padding="checkbox" colSpan={3}><div style={{display:`flex`}}><Checkbox color="primary" /><p style={{}}>{row.VariantTable}</p></div></TableCell>
              <TableCell >{row.Description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    
  );
}