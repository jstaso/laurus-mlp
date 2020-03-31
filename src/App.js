import React from "react";
import LibraryResources from "./lib/pages/mlp/library-resources";
import ClubPage from "./lib/pages/mlp/club-page";
import CareerToolbox from "./lib/pages/career-toolbox/career-toolbox";

class SideNavItems extends React.Component {
  render() {
    const items = this.props.links.map(link => {
      return (
        <li>
          <button
            className="btn btn-link"
            onClick={this.props.handleClick.bind(this, link.view)}
          >
            {link.name}
          </button>
        </li>
      );
    });

    return <ul className="list-unstyled text-center">{items}</ul>;
  }
}

class SideNav extends React.Component {
  render() {
    const pages = [
      {
        name: "MLP Pages",
        items: [
          {
            name: "Clubs",
            view: "club"
          },
          {
            name: "Library",
            view: "library"
          }
        ]
      },
      {
        name: "Career Toolbox",
        items: [
          {
            name: "Welcome",
            view: "career-toolbox"
          }
        ]
      }
    ];

    const items = pages.map(section => {
      return (
        <div>
          <h4 className="text-center">{section.name}</h4>

          <SideNavItems
            links={section.items}
            handleClick={this.props.handleClick}
          />
        </div>
      );
    });

    return <div className="col-md-2 border ">{items}</div>;
  }
}

class Display extends React.Component {
  render() {
    if (this.props.view === "club") {
      return <ClubPage />;
    } else if (this.props.view === "library") {
      return <LibraryResources />;
    } else if (this.props.view === "career-toolbox") {
      return <CareerToolbox />;
    }
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "career-toolbox"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newView) {
    this.setState({
      view: newView
    });
  }

  render() {
    return (
      <div className="App">
        <div className="bg-dark py-4 m-0" />
        <div class="container-fluid">
          <div className="row">
            <SideNav handleClick={this.handleClick} />
            <div className="col-md-10">
              <div className="bg-primary py-5" />
              <div className="border my-2">
                <h1>My Laurus Title</h1>
                <p>Home / Breadcrumb</p>
              </div>
              <div className="border">
                <Display view={this.state.view} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
