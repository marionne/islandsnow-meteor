import React from 'react';
import { Container, Grid, List, Input } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer">
          <Container>
            <br/>
            <hr/>
            <br/>
            <Grid columns={3}>
              <Grid.Column>
                <List>
                  <List.Item>About Us</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Store Locations</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item>Men</List.Item>
                  <List.Item>Women</List.Item>
                  <List.Item>Kids</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <div className="text">Join our mailing list for updates</div>
                <div className="text">Sign up to receive our email updates!</div>
                <br/>
                <Input placeholder="Enter email address" label="Join" labelPosition="right" color="black"/>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    );
  }
}
