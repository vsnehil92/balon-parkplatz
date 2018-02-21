import React, { Component } from 'react';
import '../css/App.css';
import { Button,
          Grid,
          Row,
          Col, 
          Navbar} from 'react-bootstrap';
import Parkspace  from './Parkspace';
import Navbars from './Navbars';
import {connect} from 'react-redux';
import { height } from 'window-size';

class App extends Component {
  constructor(props) {
    super(props);
    this.color = { full: '#EB5757', empty: '#27AE60', emptySpace:'2', vacentSpace:'4' };
    }
    locationDetail(){
      if (this.props.location!=''){
        return(
          <Grid fluid={true}>
            <Row className="show-grid" id="mainBody">
              <Col xs={8} md={8} lg={8} id="parking">
                <Row className="show-grid">
                  <h4 id="loc">Your Location is  {this.props.location}</h4>
                  <p id="loc">Total free space {this.color.vacentSpace}</p>
                  <p id="loc">Total full parking {this.color.emptySpace}</p> 
                  </Row>
                <Row className="show-grid">
                  <Col xs={7} md={3} lg={3} xsOffset={4} mdOffset={1} lgOffset={1}>
                    <Parkspace colour= {this.color.full} id="1"/>
                  </Col>
                  <Col xs={7} md={3} lg={3} xsOffset={4} mdOffset={1} lgOffset={1}>
                    <Parkspace colour= {this.color.empty} id="1"/>
                  </Col>
                  <Col xs={7} md={3} lg={3} xsOffset={4} mdOffset={1} lgOffset={1}>
                    <Parkspace colour= {this.color.empty} id="1"/>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={7} md={3} lg={3} xsOffset={4} mdOffset={1} lgOffset={1}>
                    <Parkspace colour= {this.color.empty} id="1"/>
                  </Col>
                  <Col xs={7} md={3} lg={3} xsOffset={4} mdOffset={1} lgOffset={1}>
                    <Parkspace colour= {this.color.full} id="1"/>
                  </Col>
                  <Col xs={7} md={3} lg={3} xsOffset={4} mdOffset={1} lgOffset={1}>
                    <Parkspace colour= {this.color.empty} id="1"/>
                  </Col>
                </Row>
              </Col>
              <Col xs={4} md={4} lg={4} id="areaData">
              </Col>
            </Row>
          </Grid>
        );
      }
      else{
        return(
          <Grid fluid={true}>
            <Row className="show-grid" id="welcomeScreen">
              <Col xs={7} md={7} lg={7} xsOffset={4} mdOffset={4} lgOffset={4}>
                <h1 id="welcomeContent">Welcome to Ballon Parkplatz</h1>
              </Col>
            </Row>
          </Grid>
        );
      }
    }
  render() {
    return (

      <div>
        <div id="navbar">
          <Navbars/>
        </div>
                {this.locationDetail()}
              
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.location
  };
}
export default connect(mapStateToProps)(App);
