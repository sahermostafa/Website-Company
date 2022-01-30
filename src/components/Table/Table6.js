import React,{useState,useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Box from '@material-ui/core/Box';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { deleteArrow } from "../../app/redux/dataSlice2";
import {useSelector} from "react-redux";


function createData(LifterModel,  PowerSource,WheelType,counterweight,Action) {
  return { LifterModel , PowerSource,WheelType, counterweight,Action};
}




function Table6() {
    const dispatch = useDispatch();
    const {table2} = useSelector(state => state.table2);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

  return (
    <Box  mx="auto" pt={3} sx={{ width: '80%' }}>
     <Paper sx={{ width: '100%', mb: 2 }}>
      <TableContainer component={Paper} m={2}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell  colSpan={3}>Lifter Model</TableCell>
            <TableCell>Power Source</TableCell>
            <TableCell>Wheel Type</TableCell>
            <TableCell>Counterweight</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table2.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  padding="checkbox" colSpan={3}><div style={{display:`flex`}}><Checkbox color="primary" /><p style={{}}>{row.LifterModel}</p></div></TableCell>
              <TableCell >{row. PowerSource}</TableCell>
              <TableCell >{row.WheelType}</TableCell>
              <TableCell >{row.counterweight}</TableCell>
              <TableCell ><Button variant="contained" size="small" color='error' onClick={() => dispatch(deleteArrow(row.id))}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={table2.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
   </Paper>
 </Box>
    
  );
}
export default Table6;