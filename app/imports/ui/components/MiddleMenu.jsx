import React from 'react';
import { Menu, Container, Dropdown, Icon } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu" id="category">
          <Container position="center">
            <Dropdown item text="MEN" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                <Dropdown.Item>ALOHA SHIRTS</Dropdown.Item>
                <Dropdown.Item>HATS</Dropdown.Item>
                <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                <Dropdown.Item>HATS</Dropdown.Item>
                <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="KIDS" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>ONESIES</Dropdown.Item>
                <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
                <Dropdown.Item>ACCESSORIES</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BRANDS" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>ALOHA SURF PROJECT</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item fitted><Icon name="SEARCH"/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}
