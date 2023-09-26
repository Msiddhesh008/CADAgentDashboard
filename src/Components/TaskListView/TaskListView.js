import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Lorenme lepsome dolor ssir amet...', "Low", "Aug 2, 2023", "Oliva Jhonson", "Completed", "Aug 2, 2023" ),
  createData('Lorenme lepsome dolor ssir amet...', "High", "Aug 2, 2023", 37, 4.3),
  createData('Lorenme lepsome dolor ssir amet...', "Medium", "Aug 2, 2023", 24, 6.0),
  createData('Lorenme lepsome dolor ssir amet...', "High", "Aug 2, 2023", 67, 4.3),
  createData('Lorenme lepsome dolor ssir amet...', "Low", "Aug 2, 2023", 49, 3.9),
];

const TaskListView = () => {
  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell align="right">Priority</TableCell>
            <TableCell align="right">Assigned Date</TableCell>
            <TableCell align="right">Assigned By</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Due Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default TaskListView