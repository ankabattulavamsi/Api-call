import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';

import { TableHead, TablePagination } from '@mui/material';

const App = () => {
  const [data, setData] = useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
      response => setData(response.data)
    )
  },[])

  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

  return (
    <Paper sx={{ width: '100%' }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">User Id</TableCell>
            <TableCell align="right">completed&nbsp;(g)</TableCell>
            <TableCell align="right">id&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="right">{item.userId}</TableCell>
              <TableCell align="right">{item.completed.toString()}</TableCell>
              <TableCell align="right">{item.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
    </TableContainer>
    <TablePagination
    rowsPerPageOptions={[10, 25, 100]}
    component="div"
    count={data.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  />
  </Paper>
  )
}

export default App


// import React from 'react'
// import ApiCall from './ApiCall'
// import './App.css'

// const App = () => {
//   return (
//     <div>
//       <ApiCall />
//     </div>
//   )
// }

// export default App
