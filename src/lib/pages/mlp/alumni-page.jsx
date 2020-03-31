import React from "react";

export default class CareerToolbox extends React.Component {
  render() {
    return (
      <div>
        <HeroMedia
          img="http://myweb.live/jstaso/mlp-images/logos/proquest_logo.jpg"
          name="Welcome Alumni"
          text="Welcome to the Laurus College Alumni Page. This area of the MyLaurus Portal is dedicated to providing information and resources to Laurus College graduates"
          buttonText="Graduation Pictures"
          buttonUrl="http://bit.ly/lc-graduation"
        />
        <div className="container">
          <ResourceList resources={alumniResources} />
        </div>
      </div>
    );
  }
}
