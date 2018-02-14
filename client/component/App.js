import React, { Component } from 'react';
import '../css/App.css';
import { Button,
          Grid,
          Row,
          Col, 
          Navbar} from 'react-bootstrap';
import Parkspace  from './Parkspace';
import Navbars from './Navbars';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { full: '#EB5757', empty: '#27AE60' };
    }
  render() {
    return (

      <div>
        <div id="navbar">
          <Navbars/>
        </div>
          <Grid fluid={true}>
            <Row className="show-grid" id="mainBody">
              <Col xs={8} md={8} lg={8} id="parking">
                <Row className="show-grid">
                  <Col xs={7} md={3} lg={3} xsOffset={4} mdOffset={1} lgOffset={1}>
                    <Parkspace colour= {this.state.full} id="1"/>
                  </Col>
                  <Col xs={7} md={3} lg={3} xsOffset={4} mdOffset={1} lgOffset={1}>
                    <Parkspace colour= {this.state.empty} id="1"/>
                  </Col>
                  <Col xs={7} md={3} lg={3} xsOffset={4} mdOffset={1} lgOffset={1}>
                    <Parkspace colour= {this.state.empty} id="1"/>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={7} md={3} lg={3} xsOffset={4} mdOffset={1} lgOffset={1}>
                    <Parkspace colour= {this.state.empty} id="1"/>
                  </Col>
                  <Col xs={7} md={3} lg={3} xsOffset={4} mdOffset={1} lgOffset={1}>
                    <Parkspace colour= {this.state.full} id="1"/>
                  </Col>
                  <Col xs={7} md={3} lg={3} xsOffset={4} mdOffset={1} lgOffset={1}>
                    <Parkspace colour= {this.state.empty} id="1"/>
                  </Col>
                </Row>
              </Col>
              <Col xs={4} md={4} lg={4} id="areaData">
              </Col>
            </Row>
          </Grid>
      </div>

    );
  }
}

export default App;
