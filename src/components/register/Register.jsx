import React, {useState,useLayoutEffect} from 'react'
import {Row,Col,Button} from 'react-bootstrap'
import fees from "./fees.png"
import payment from "./payment.png"
const Register = () => {
  const [hovered, setHovered] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);

    const buttonStyle = {
      transition: 'background-color 0.3s ease',
      textAlign:"center"
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
   <div className='m-4 '>
   <div style={ {border:"0.2px rgb(67,67,67) solid " ,borderRadius:"5px", padding:"10px", textAlign:"center", marginBottom:"0px"}}>
     
   <label style={{fontWeight:"bold", textDecoration: "dotted", fontSize:"20px"}}>Registration </label> <label style={{color:"yellowgreen", fontWeight:'bold',fontSize:"20px"}}>Details</label><br/>
    <br/>
    <Row style={{textAlign:"center", paddingBottom:"0px"}}>
        <Col md="6" sm="12" lg="6">
        <img width="95%" height="90%" src={fees} alt="clg-img" />
      
        </Col>
        <Col md="6" sm="12" lg="6">
        <img width="95%" height="90%" src={payment} alt="clg-img" />
        </Col>
    </Row>
   <Button className='discoverbtn ' 
   variant='primary'
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      style={buttonStyle}>
        Register Now
      </Button>
      {/* <h3 style={{color:"red"}}>Register Now...!</h3> */}
   </div>
   
   </div>
  )
}

export default Register