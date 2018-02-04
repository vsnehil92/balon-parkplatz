import React, { Component } from 'react';
import '../css/App.css';
import { Button,
          Grid,
          Row,
          Col } from 'react-bootstrap';
import Parkspace  from './Parkspace';

class App extends Component {
  render() {
    return (

        <Grid fluid={true}>
          <Row className="show-grid" id="mainBody">
            <Col xs={8} md={8} lg={8} id="parking">
              <Row className="show-grid">
                <Col xs={3} md={3} lg={3} xsOffset={5} mdOffset={1} lgOffset={1}>
                  <Parkspace colour="red" id="1"/>
                </Col>
                <Col xs={12} md={3} lg={3} xsOffset={5} mdOffset={1} lgOffset={1}>
                  <Parkspace colour="red" id="1"/>
                </Col>
                <Col xs={12} md={3} lg={3} xsOffset={5} mdOffset={1} lgOffset={1}>
                  <Parkspace colour="red" id="1"/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={12} md={3} lg={3} xsOffset={5} mdOffset={1} lgOffset={1}>
                  <Parkspace colour="red" id="1"/>
                </Col>
                <Col xs={12} md={3} lg={3} xsOffset={5} mdOffset={1} lgOffset={1}>
                  <Parkspace colour="red" id="1"/>
                </Col>
                <Col xs={12} md={3} lg={3} xsOffset={5} mdOffset={1} lgOffset={1}>
                  <Parkspace colour="red" id="1"/>
                </Col>
              </Row>
            </Col>
            <Col xs={4} md={4} lg={4} id="areaData">
            </Col>
          </Row>
        </Grid>

    );
  }
}

export default App;
