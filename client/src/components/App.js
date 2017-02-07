import React from 'react';
import Navbar from '../containers/NavbarContainer';
import AppBar from 'material-ui/AppBar';

const alienar = {
  marginLeft: 300,
  marginRight: 300,
}
export default ({ children }) => (
    <div>
      <AppBar title="MarerialUI-React-Redux-Graphql" >
        <Navbar />
      </AppBar>
      <div style={alienar}>{children}</div>

    </div>
);
