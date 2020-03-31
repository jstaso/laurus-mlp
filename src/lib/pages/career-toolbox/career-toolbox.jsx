import React from "react";
import ArticleList from "../../components/article-list";
import Navbar from "../../components/navbar";
import articles from "../../json/career-toolbox-articles.json";

class Display extends React.Component {
  render() {
    if (this.props.view === "welcome") {
      return <h2 className="h1 my-3">Welcome</h2>;
    } else if (this.props.view === "jobs") {
      return <h2>Jobs</h2>;
    } else if (this.props.view === "articles") {
      return (
        <div>
          <ArticleList articles={articles} title="Career Services Articles" />
        </div>
      );
    } else {
      return <h2>Other</h2>;
    }
  }
}

export default class CareerToolbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "welcome"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newView) {
    this.setState({
      view: newView
    });
  }

  render() {
    const links = [
      {
        name: "Welcome",
        view: "welcome"
      },
      {
        name: "Jobs",
        view: "jobs"
      },
      {
        name: "Articles",
        view: "articles"
      }
    ];

    return (
      <div>
        <Navbar handleClick={this.handleClick} links={links} />
        <div className="container">
          <Display view={this.state.view} />
        </div>
      </div>
    );
  }
}
