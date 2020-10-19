import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        className="page-footer center-on-small-only"
        style={{ width: "100%", bottom: 0, marginTop: 0, paddingTop: 0 }}
      >
        <div className="footer-copyright">
          <div className="container-fluid">
            © 2016 Copyright:
            <span href="http://www.MDBootstrap.com"> MDBootstrap.com </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
