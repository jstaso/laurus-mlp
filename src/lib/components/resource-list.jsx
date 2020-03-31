import React from "react";

class ResourceListHeaderInfo extends React.Component {
  render() {
    const items = this.props.info.map(item => {
      if (item.url) {
        return (
          <li className="mb-2">
            <a href={item.url} className=" d-none d-md-block">
              <img src={item.icon} alt="" width="16" /> {item.text}
            </a>
            <a href={item.url} className="btn btn-primary btn-block d-md-none">
              {item.btn}
            </a>
          </li>
        );
      } else {
        return (
          <li className="mb-2">
            <img src={item.icon} alt="" width="16" /> {item.text}
            <br />
            {item.email}
          </li>
        );
      }
    });
    return <ul className="list-unstyled">{items}</ul>;
  }
}

class ResourceListHeader extends React.Component {
  render() {
    let image = "";
    if (this.props.category.image) {
      image = (
        <div>
          <img
            src={this.props.category.image}
            alt=""
            className="mr-4 d-none d-lg-block"
          />
          <img
            src={this.props.category.banner}
            className="img-fluid d-lg-none"
            alt=""
          />
        </div>
      );
    }
    return (
      <div className="pt-2" id={this.props.category.id}>
        <div className="mb-4 pb-4 border-bottom d-lg-flex">
          {image}
          <div>
            <h4 className="h1 m-0">{this.props.category.name}</h4>
            <p className="d-none d-sm-block">
              <span className="lead">{this.props.category.text}</span>
            </p>

            <ResourceListHeaderInfo info={this.props.category.info} />
          </div>
        </div>
      </div>
    );
  }
}

class ResourceListItem extends React.Component {
  render() {
    return (
      <div className="row no-gutters">
        <div className="mb-4 pb-4 border-bottom col">
          <h5 className="m-0">
            <img
              src={`${this.props.icon}`}
              className="mr-2"
              alt="resource icon"
            />
            {this.props.name}
          </h5>
          <a href={this.props.url} className="stretched-link">
            {this.props.url}
          </a>
          <p className="small m-0">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

class ResourceListItems extends React.Component {
  render() {
    const items = [];
    if (this.props.items) {
      items.push(
        this.props.items.map((resource, index) => {
          return (
            <ResourceListItem
              name={resource.name}
              url={resource.url}
              icon={this.props.icon}
              text={resource.text}
              key={index}
            />
          );
        })
      );
      return <div>{items}</div>;
    } else {
      return null;
    }
  }
}

export default class ResourceList extends React.Component {
  render() {
    const items = this.props.resources.map((category, index) => {
      return (
        <div key={index}>
          <ResourceListHeader category={category} />
          <ResourceListItems items={category.items} icon={category.icon} />
          <a href="#top">&#x2BC5;Back to Top</a>
        </div>
      );
    });

    return <div>{items}</div>;
  }
}
