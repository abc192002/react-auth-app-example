import React from 'react';

export default (props) => {
  const users = props.data.users;


  if (!users) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Cargando</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Usuarios</h1>
          <table className="table mt-2">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};
