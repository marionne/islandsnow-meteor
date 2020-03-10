import React from 'react';
import { Container, Image } from 'semantic-ui-react';

export default class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Container>
          <Image src="http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-logo.png"
                 size='medium' centered/>
        </Container>
    );
  }
}
