import React from 'react';
import { Container, Menu, Icon, Dropdown } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu-section">
          <Menu borderless className="topmenu">
            <Container>
              <Menu.Item fitted left><Icon name="facebook f"/></Menu.Item>
              <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
              <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
              <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
              <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
              <Menu.Item fitted><Icon name="search"/></Menu.Item>
              <Menu.Item fitted><Icon name="user"/></Menu.Item>
              <Dropdown item text="MY CART 0" icon="shop">
                <Dropdown.Menu>
                  <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Container>
          </Menu>
        </Menu>
    );
  }
}
