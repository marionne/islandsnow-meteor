import React from 'react';
import IslandSnowLogo from '../components/IslandSnowLogo';
import MiddleMenu from '../components/MiddleMenu';
import AVideo from '../components/AVideo';

export default class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <AVideo/>
        </div>
    );
  }
}
