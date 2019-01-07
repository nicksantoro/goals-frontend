import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer color="blue" className="font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="6">
              <h5 className="title">Footer Content</h5>
              <p>
                use rows and columns here to organize footer
                content.
      </p>
            </Col>
            <Col md="6">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            {/* &copy;  */}
            {new Date().getFullYear()}
            <a href="https://github.com/nicksantoro"> Goals </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;