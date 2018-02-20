import React, { Component } from 'react';
import { Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    FormGroup,
    Button,
    FormControl,
    Image } from 'react-bootstrap';
import '../css/Navbars.css';
import {connect} from 'react-redux';
import {currentLocation} from '../actions/index'; 
import { bindActionCreators } from 'redux';

class Navbars extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this); 
        this.searchLocation = this.searchLocation.bind(this);
        }
    handleChange(event) {
        this.setState({value: event.target.value});

    }

    searchLocation(){
        this.props.currentLocation(this.state.value);
      }
    render(){
        return(
            <Navbar>
                <Navbar.Form pullLeft>
                <FormGroup>
                    <FormControl type="text" value={this.state.value} placeholder="Search Location" onChange={this.handleChange} />
                    <Image src="../images/searchButton.png" className='search' onClick={this.searchLocation}/>
                </FormGroup>{' '} 
                </Navbar.Form>
                <Nav pullRight>
                        <h1>Balon Parkplatz</h1>
                </Nav>
            </Navbar>
        )
    }
}

function mapStateToProps(state) {
    return {
        location: state.location
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({currentLocation: currentLocation}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Navbars);
