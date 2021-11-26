import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
class TabTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }
  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
            <Tab label="Item One" {...this.a11yProps(0)} />
            <Tab label="Item Two" {...this.a11yProps(1)} />
            <Tab label="Item Three" {...this.a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.value} index={0}>
          Item One
      </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          Item Two
      </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          Item Three
      </TabPanel>
      </div>
    );
  }
}
class TabPanel extends Component {
  render() {
    return (
      <Typography component="div" hidden={this.props.value !== this.props.index}>
        <Box p={3}>{this.props.children}</Box>
      </Typography>
    );
  }
}
export default TabTutorial;