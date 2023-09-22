import * as React from 'react';
import './Table.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomTag from '../../Components/CustomTag/CustomTag';

function createData(name, description, createdDate, status, action) {
  return { name, description, createdDate, status, action };
}

const rows = [
  createData(<CustomTag/>, "Lorem ipsum Lorem ipsum", "10 March 2023", 24, 4.0),
  createData(<CustomTag/>, "Lorem ipsum Lorem ipsum", "10 March 2023", 37, 4.3),
  createData(<CustomTag/>, "Lorem ipsum Lorem ipsum", "10 March 2023", 24, 6.0),
  createData(<CustomTag/>, "Lorem ipsum Lorem ipsum", "10 March 2023", 67, 4.3),
  createData(<CustomTag/>, "Lorem ipsum Lorem ipsum", "10 March 2023", 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell 
            className='table-head' >Name</TableCell>
            <TableCell align="left" className='table-head'>Description</TableCell>
            <TableCell align="center" className='table-head'>Created Date</TableCell>
            <TableCell align="center" className='table-head'>Status</TableCell>
            <TableCell align="center" className='table-head'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left' component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="center">{row.createdDate}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}