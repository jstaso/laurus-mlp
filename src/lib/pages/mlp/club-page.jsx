import React from "react";
import ResourceList from "../../components/resource-list";
import clubResources from "../../json/club-resources.json";

export default class LibraryResources extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <ResourceList resources={clubResources} />
        </div>
      </div>
    );
  }
}
