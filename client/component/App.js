import React, { Component } from 'react';
import '../css/App.css';
import { Button,
          Grid,
          Row,
          Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (

        <Grid fluid="true">
          <Row className="show-grid" id="mainBody">
            <Col xs={8} md={8} lg={8} id="parking">
            </Col>
            <Col xs={4} md={4} lg={4} id="areaData">
            </Col>
          </Row>
          </Grid>

    );
  }
}

export default App;
