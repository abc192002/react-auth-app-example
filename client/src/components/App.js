import React from 'react';

import Navbar from '../containers/NavbarContainer';
import AppBar from 'material-ui/AppBar';

export default ({ children }) => (
    <div>
      <AppBar
        title="Project React-Redux-Graphql - Spanish"
        iconClassNameRight="muidocs-icon-navigation-expand-more">
  <Navbar />
  </AppBar>
      {children}
    </div>
);
