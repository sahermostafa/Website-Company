import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@material-ui/core/Box';

function createData(Line,characteristic,value) {
  return { Line ,characteristic,value };
}
const rows = [
  createData(1,"wheel type","c-Cushion Tries" ),
  createData(2,"wheel type","c-Cushion Tries"),
  createData(3,"wheel type", "c-Cushion Tries"),
];

export default function Table2() { 
  return (
    <Box my="3rem" pt={3}>
      <TableContainer component={Paper} m={2}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell >Line</TableCell>
            <TableCell >characteristic</TableCell>
            <TableCell>value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{row.Line}</TableCell>
              <TableCell >{row.characteristic}</TableCell>
              <TableCell >{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    
  );
}