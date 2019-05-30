import React, { Component } from "react";
import { Link } from "react-router-dom";
import { scaleRotate as Menu } from "react-burger-menu";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: true });
  }
  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }
  render() {
    return (
      <div className="Header">
        <div>
          <Menu
            right
            isOpen={false}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          >
            <ul>
              <li>
                <Link className="menuLinks" to="/" onClick={this.closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="menuLinks"
                  onClick={this.closeMenu}
                  to="/cities/all"
                >
                  Cities
                </Link>
              </li>
              <li>
                <Link
                  className="menuLinks"
                  onClick={this.closeMenu}
                  to="/login"
                >
                  Log in
                </Link>
              </li>
            </ul>
          </Menu>
        </div>
      </div>
    );
  }
}

export default Header;
