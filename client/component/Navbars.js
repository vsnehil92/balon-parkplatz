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
import '../css/Navbars.css'

class Navbars extends Component{
    searchLocation(){
        alert();
      }
    render(){
        return(
            <Navbar>
                <Navbar.Form pullLeft>
                <FormGroup>
                    <FormControl type="text" placeholder="Search" />
                {/* <Button type="Submit"> */}
                    <Image src="../images/searchButton.png" className='search' onClick={this.searchLocation}/>
                {/* </Button>  */}
                </FormGroup>{' '} 
                </Navbar.Form>
                <Nav pullRight>
                        <h1>Balon Parkplatz</h1>
                </Nav>
            </Navbar>
        )
    }
}

export default Navbars;
