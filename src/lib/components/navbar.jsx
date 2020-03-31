import React from "react";

class NavbarItems extends React.Component {
  render() {
    const items = this.props.links.map(link => {
      return (
        <button
          className="nav-item nav-link btn btn-link"
          onClick={this.props.handleClick.bind(this, link.view)}
        >
          {link.name}
        </button>
      );
    });
    return <div className="navbar-nav">{items}</div>;
  }
}

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <NavbarItems
              links={this.props.links}
              handleClick={this.props.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
