import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';

class BoxTutorial extends Component {
  render() {
    return (
      <div>
        <Box clone color="primary.main" m={5}>
          <Button>Button 1</Button>
        </Box>
        <Box color="primary.main" m={5}>
          <Button>Button 2</Button>
        </Box>
        <Box component="span" m={5}>
          <Button>Button 3</Button>
        </Box>
      </div>
    );
  }
}
export default BoxTutorial;