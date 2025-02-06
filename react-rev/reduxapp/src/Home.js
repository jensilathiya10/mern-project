import React, { useEffect } from 'react'
import Logout from './Logout'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { fetchuser } from './userSlice';
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchuser())
  }, [fetchuser])
  const {userdata,loading,error}= useSelector((state) => state.users)
  console.log(userdata)

  if (loading) {
    return <h1>Loading</h1>
  }
  return (
    <div>
      <h1>Home page</h1>
      <Logout />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Roll</TableCell>
              <TableCell>Class</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userdata.users.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row._id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.roll}</TableCell>
                <TableCell>{row.classe}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home;