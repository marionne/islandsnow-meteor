import React from 'react';

export default class AVideo extends React.Component {
  render() {
    return (
        <video
            autoPlay
            muted
            loop
            style={{
              // position: "fixed",
              width: '100%',
            }}
        >
          <source src="https://cdn.shopify.com/s/files/1/1035/5187/files/ISHSmall.mp4" type="video/mp4"/>
        </video>
    );
  }
}
