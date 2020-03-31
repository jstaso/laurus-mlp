import React from "react";

export default class InfoStripe extends React.Component {
  render() {
    return (
      <div className="bg-light">
        <div className="container py-5">
          <div className="row justify-content-between ">
            <div className="col-lg-5 col-md order-md-2 mb-3">
              <h4 className="h2">Library Assistance</h4>
              <ul className="list-unstyled">
                <li>M-Th: 8:00AM - 10:05PM</li>
                <li>Fri: 9:00AM - 4:00PM</li>
                <li>
                  <a href="mailto:library@lauruscollege.edu">
                    library@lauruscollege.edu
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 col-md order-md-1 mb-3 " id="top">
              <h4 className="h2">Library Resources</h4>
              <p>
                There are a vast number of helpful online resources, digital
                textbooks, and reference materials available to you.
              </p>
              <ul className="h5">
                <li className="mb-2">
                  <a href="#research">Research Libraries</a>
                </li>
                <li className="mb-2">
                  <a href="#ebooks">eBooks & Textbooks</a>
                </li>
                <li className="mb-2">
                  <a href="#art">Art & Design Resources</a>
                </li>
                <li className="mb-2">
                  <a href="#medical">Medical Resources</a>
                </li>
                <li>
                  <a href="#fieldtrips">Virtual Field Trips</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
