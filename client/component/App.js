import React, { Component } from 'react';
import '../css/App.css';
import { Button,
          Grid,
          Row,
          Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8} lg={8}>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Button bsStyle="primary">Primary 
                </Button>
            </Col>
          </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
