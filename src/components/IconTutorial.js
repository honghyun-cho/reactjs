import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';

class IconTutorial extends Component {
  render() {
    return (
      <div style={{ margin: '30px' }}>
        <div>Material Icons - Home Icon</div>
        <div style={{ display: 'flex' }}>
          <HomeIcon />
          <HomeIcon color="primary" fontSize="large" />
        </div>
        <div>SVG Icons - Home Icon</div>
        <div style={{ display: 'flex' }}>
          <SVGHomeIcon color="secondary" fontSize="large" />
          <SVGHomeIcon color="error" style={{ fontSize: '5rem' }} />
        </div>
        <div>Font Mateiral Icons -Add Icon</div>
        <div style={{ display: 'flex' }}>
          <Icon>add_circle</Icon>
          <Icon color="primary" fontSize="large">add_circle</Icon>
        </div>
      </div>
    );
  }
}
class SVGHomeIcon extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>

    );
  }
}
export default IconTutorial;