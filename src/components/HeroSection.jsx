import React, {useState } from 'react'
import '../App.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import aviplogo from '../images/AVIP.png'
import msbtelogo from '../images/MSBTELOGO.png'
import dbatulogo from '../images/DBATU.png'
import icpalogo from '../images/ICPA2Logo.png'
const HeroSection = () => {
    const [hovered, setHovered] = useState(false);

    const buttonStyle = {
      backgroundColor: hovered ? 'lightgreen' : 'yellowgreen',
      transition: 'background-color 0.3s ease',
    };
  
    const handleHover = () => {
      setHovered(true);
    };
  
    const handleMouseOut = () => {
      setHovered(false);
    };
    const handleClick = () => {
        window.open('https://forms.gle/VVEd5hU1UuPK3Cv36', '_blank');
    };
    return (
        <Container fluid className='hero' style={{ color: 'white', background: "#3E4598", margin: '0px', padding: '50px 100px' }}>
      <h1  style={{ textAlign: 'center', color: 'yellowgreen',
          }}>Drug Discovery And Development from Concept to Commercialization</h1>

      <Row className="align-items-center">
        <Col md={8} xs={12}>
          <h1>Second International Conference on Innovative Pharmacy Amrutvahini 2025</h1>
          <p>Approved by Maharashtra State Board of Technical Education Mumbai, India.<br /> Dr. Babasaheb Technological University, Lonere, Raigad, Maharashtra, India</p>
          <Row>
            <Col>
              <img src={aviplogo} alt='Logo' className="img-fluid" style={{ maxHeight: '130px', textAlign: 'end' }} />
            </Col>
            <Col>
              <img src={msbtelogo} alt='Logo' className="img-fluid" style={{ maxHeight: '130px', textAlign: 'end' }} />
            </Col>
            <Col>
              <img src={dbatulogo} alt='Logo' className="img-fluid" style={{ maxHeight: '125px', textAlign: 'end' }} />
            </Col>
          </Row>
        </Col>
        <Col className="text-md-right mb-md-0 mb-3">
          <img src={icpalogo} alt='Logo' className="img-fluid" style={{ maxHeight: '250px', textAlign: 'end' }} />
        </Col>
      </Row>
      <br/>
      <h2 className="text-start" >
        Save the Date!
        <br />
        Feb 24<sup>th</sup> - 25<sup>th</sup>, 2025
      </h2>
      <Button className='discoverbtn' 
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      style={buttonStyle}>
        Accelerating Discoveries with AI
      </Button>
    </Container>
    )
}

export default HeroSection;