import React from "react";

class Article extends React.Component {
  render() {
    return (
      <div className="article mt-2">
        <img src={this.props.article.banner} alt="" className="img-fluid" />
        <h2 className="h1 my-3">{this.props.article.title}</h2>
        {this.props.article.text}
        <button className="btn btn-link">&lt;- Back to Articles</button>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    const items = this.props.articles.map(article => {
      return (
        <div className="row mb-5">
          <div className="col col-lg-4 d-none d-lg-block">
            <img src={article.image} alt="" className="img-fluid" />
          </div>
          <div className="col">
            <img src={article.banner} alt="" className="img-fluid d-lg-none" />
            <h3>{article.title}</h3>
            <div>{article.excerpt}</div>
            <button
              onClick={this.props.handleClick.bind(
                this,
                "article",
                article.title,
                article
              )}
              className="btn btn-link stretched-link"
            >
              Read more
            </button>
          </div>
        </div>
      );
    });

    return <div>{items}</div>;
  }
}

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "list",
      article: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newView, title, article) {
    this.setState({
      view: newView,
      article: article
    });
  }

  render() {
    if (this.state.view === "list") {
      return (
        <div>
          <h2 className="h1 my-3">{this.props.title}</h2>
          <List articles={this.props.articles} handleClick={this.handleClick} />
        </div>
      );
    } else if (this.state.view === "article") {
      return <Article article={this.state.article} />;
    }
  }
}
