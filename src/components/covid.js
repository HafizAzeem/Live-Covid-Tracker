import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Covid = () => {
  const [data, setData]= useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const realData = await res.json();
      // console.log();
      setData(realData.statewise[0])
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCovidData()
  }, []);

  return (
    <>
     <Container>
       <Row>
       <Col md="2"></Col>
       <Col md="8"> <h1>🔴 LIVE</h1>
             <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        </Col>
       <Col md="2"></Col>
       </Row>
       
      <Row>
        <Col md="2"></Col>
        <Col md="3">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Our County</Card.Header>
            <Card.Body>
              <Card.Title>Pakistan</Card.Title>
              <Card.Text>
                Pakistan
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Total Recovered </Card.Header>
            <Card.Body>
              <Card.Title>Pakistan</Card.Title>
              <Card.Text>
                {data.recovered}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Total Confirmed</Card.Header>
            <Card.Body>
              <Card.Title>Pakistan</Card.Title>
              <Card.Text>
                {data.confirmed}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2"></Col>
      </Row>

      <Row className="mt-4">
        <Col md="2"></Col>
        <Col md="3">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Total Deaths</Card.Header>
            <Card.Body>
              <Card.Title>Pakistan</Card.Title>
              <Card.Text>
                {data.deaths}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Total Active</Card.Header>
            <Card.Body>
              <Card.Title>Pakistan</Card.Title>
              <Card.Text>
                 {data.active}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Last Update</Card.Header>
            <Card.Body>
              <Card.Title>Pakistan</Card.Title>
              <Card.Text>
                {data.lastupdatedtime}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2"></Col>
      </Row>
      </Container>
    </>
  );
};
export default Covid;
