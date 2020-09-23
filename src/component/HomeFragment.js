import React from 'react';
import Card from './SideDrawer/cards';
import Graph from './SideDrawer/graph';
import Graph2 from './SideDrawer/graph2';
import {Grid, Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeFragment = () => {
    return (
        <div>
            <Row>
          
          <Col xs={12} md={8} lg={6}>
      <Card/>
      <Graph/>
      </Col>
      
      <Col xs={12} md={4} lg={6}>
      
      <Graph2/>
     
      </Col>
      </Row>
        </div>
    )
}

export default HomeFragment
