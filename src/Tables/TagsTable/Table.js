import * as React from 'react';
import './Table.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';

export default function BasicTable({rows, handleSwitchChange, handleDelete}) {
  
  
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='table-head' >Name</TableCell>
            <TableCell align="left" className='table-head'>Description</TableCell>
            <TableCell align="center" className='table-head'>Created Date</TableCell>
            <TableCell align="center" className='table-head'>Status</TableCell>
            <TableCell align="center" className='table-head'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left' component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="center">{row.createdDate}</TableCell>
              <TableCell align="center">
                <Switch
                  checked={row.status}
                  onChange={
                    () => handleSwitchChange(index)
                  }
                  name={`customSwitch${row.index}`}
                  color="primary"
                />
              </TableCell>
              <TableCell
              onClick={() => {
                handleDelete(row.id)
                console.log(row.id)
              }}
              align="center">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}