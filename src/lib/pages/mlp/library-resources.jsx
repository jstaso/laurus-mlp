import React from "react";
import ResourceList from "../../components/resource-list";
import HeroMedia from "../../components/hero-media";
import InfoStripe from "../../components/info-stripe";
import libraryResources from "../../json/library-resources.json";

export default class LibraryResources extends React.Component {
  render() {
    return (
      <div>
        <HeroMedia
          img="files/library_resources/images/proquest_logo.jpg"
          name="ProQuest"
          text="In addition to textbooks, classroom learning resources, and the reference materials available at each campus, Laurus College subscribes to the electronic reference database system ProQuest"
          buttonText="Open ProQuest"
          buttonUrl="https://proquest.com"
        />
        <InfoStripe />
        <div className="container">
          <ResourceList resources={libraryResources} />
        </div>
      </div>
    );
  }
}
