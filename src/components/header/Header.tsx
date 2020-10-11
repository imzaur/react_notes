import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


export default class Header extends Component {
    render() {
        return (
          <div>
          <p>React Notes</p>
          <Nav>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">Disabled Link</NavLink>
            </NavItem>
          </Nav>
          </div>
      );
    }
}
