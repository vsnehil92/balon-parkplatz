import React, { Component } from 'react';
import '../css/Parkspace.css' ;

class Parkspace extends Component {
    render() {
        return(
            <div className="carspace" style={{ backgroundColor:this.props.colour }} id={this.props.id}> </div>
        );
    }
}

export default Parkspace;