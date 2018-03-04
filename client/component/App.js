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
import MyMapComponent from './Maps';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { full: '#EB5757', empty: '#27AE60', emptySpace:'2', vacentSpace:'4' , current_state: '', isMarkerShown: false,};
    }
    componentDidMount(){
      axios.get('/parking_data')
      .then((response) => {
        this.getstate(response.data[0].current_status)
      })
      .catch((error) => {
        console.log(error);
      });
      this.delayedShowMarker();
    }

    delayedShowMarker(){
      setTimeout(() => {
        this.setState({ isMarkerShown: true })
      }, 3000)
    }
  
    handleMarkerClick() {
      this.setState({ isMarkerShown: false })
      this.delayedShowMarker()
    }

    getstate(data){
      console.log(data);
      this.setState({current_state: data});
      console.log(this.state.current_state);
    }

    getcolor() {
      console.log(this.state.current_state);
      if(this.state.current_state==1){
        return(this.state.full);
      } else{
        return(this.state.empty);
      }
      
    }
    locationDetail(){
      if (this.props.location!=''){
        return(
          <Grid fluid={true}>
            <Row className="show-grid" id="mainBody">
              <Col xs={8} md={8} lg={8} id="parking">
                <Row className="show-grid">
                  <h4 id="loc">Your Location is  {this.props.location}</h4>
                  <p id="loc">Total free space {this.state.vacentSpace}</p>
                  <p id="loc">Total full parking {this.state.emptySpace}</p> 
                  </Row>
                <Row className="show-grid">
                  <Col xs={7} md={3} lg={3} xsOffset={4} mdOffset={1} lgOffset={1}>
                    <Parkspace colour= {this.getcolor()} id="1"/>
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
                <MyMapComponent isMarkerShown={this.state.isMarkerShown}
                                onMarkerClick={this.handleMarkerClick} />
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
