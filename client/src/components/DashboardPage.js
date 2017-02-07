import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';

export default (props) => {
const users = props.data.users;
return (
    <Table>
      <TableHeader>
        <TableRow>
            <TableHeaderColumn colSpan="4" style={{textAlign: 'center'}}>
              <h1>Tabla Usuarios</h1>
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Nombre</TableHeaderColumn>
            <TableHeaderColumn>Apellido</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
          </TableRow>
          </TableHeader>
      <TableBody>
        {users && users.map((user, index) => (
        <TableRow key={index}>
          <TableRowColumn>{index+1}</TableRowColumn>
          <TableRowColumn>{user.firstName}</TableRowColumn>
          <TableRowColumn>{user.lastName}</TableRowColumn>
          <TableRowColumn>{user.email}</TableRowColumn>
        </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableRowColumn>ID</TableRowColumn>
          <TableRowColumn>Nombre</TableRowColumn>
          <TableRowColumn>Apellido</TableRowColumn>
          <TableRowColumn>Email</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn colSpan="4" style={{textAlign: 'center'}}>
            <h1>Tabla Usuarios</h1>
          </TableRowColumn>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
