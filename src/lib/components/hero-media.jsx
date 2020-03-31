import React from "react";

export default class HeroMedia extends React.Component {
  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-lg">
            <img src={this.props.img} className="img-fluid mb-3" />
          </div>
          <div className="col-lg">
            <h4 className="h1 m-0 d-none d-lg-block">{this.props.name}</h4>
            <p className="h5 font-weight-normal mb-3">{this.props.text}</p>
            <a href="{this.props.buttonUrl}" className="btn btn-primary">
              {this.props.buttonText}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
