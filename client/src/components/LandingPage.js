import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const DeepDownTheTree = (props) => (
  <span style={{color: props.muiTheme.palette.textColor}}>
    <h1>Bienvenidos!</h1>
    <p>Esta es la página principal.</p>
  </span>
);

export default muiThemeable()(DeepDownTheTree);
