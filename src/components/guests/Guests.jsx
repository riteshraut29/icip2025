import React,{useLayoutEffect} from 'react'
import ReactCountryFlag from "react-country-flag"

import { Row , Container} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import g1 from '../../images/guest_img/g1.png'
import g2 from '../../images/guest_img/g2.png'
import g3 from '../../images/guest_img/g3.png'
import g4 from '../../images/guest_img/g4.png'
import g5 from '../../images/guest_img/g5.png'
import g6 from '../../images/guest_img/g6.png'
import vikas from '../../images/2025_guest/vikas.png'
import manoj from '../../images/2025_guest/manoj.png'
import ekkasit from '../../images/2025_guest/ekkasit.png'
import masteria from '../../images/2025_guest/masteria.png'
import zurina from '../../images/2025_guest/zurina.png'
import abha from '../../images/2025_guest/abha.png'
import ishita from '../../images/2025_guest/ishita.png'
import sachin from '../../images/2025_guest/sachin.png'
import nitin from '../../images/2025_guest/nitin.png'
import kala from '../../images/2025_guest/kala.png'
const Guests = () => {

  const guestData=[

    {
      img:kala,
      name:"Dr. V. Kalaiselvan",
      resignantion:"Senior Principal Scientific Officer IPC, Ministry of Health & Family Welfare Govt of India, Ghaziabad, UP(India) ",
      country:"India",
      id:'IN'
  },
  {
      img:vikas,
      name:"Dr Vikas D. Dighe",
      resignantion:"Pratical Reproductive and Beat Textratogy CM-or Reach in predatte and th Minds, ",
      country:"India",
      id:'IN'
  },
  {
    img:manoj,
    name:"Dr. Manoj P. Jadhav",
    resignantion:"PhD FCP founder & CEO ISHA Therapeutics, LLC Hillsborough, New Jersey, ",
    country:"Uinited States of America",
    id:'US'
},
{
  img:ekkasit,
  name:"Dr. Ekkasit Kumarnsit",
  resignantion:"Prince of Songkla University, Faculty of Science, Physiology, PhD. (Neuroscience), ",
  country:"Thailand",
  id:'TH'
},
{
  img:masteria,
  name:"Prof.Dr. Masteria Yunovilsa",
  resignantion:"Head of Research Center for Vaccine and Drugs BRIN,",
  country:"Indonesia",
  id:'ID'
},


{
  img:zurina,
  name:"Dr. Zurina Binti Hassan",
  resignantion:"Deputy Director, Centre for Drug Research (CDR), Universiti Sains,",
  country:"Malaysia",
  id:'MY'
},
{
  img:abha,
  name:"Dr. Abha Chalpe - Ghosh",
  resignantion:"Senior Consultant, Cheeky Scientist Association, Florida,",
  country:"USA",
  id:'US'
},

{
  img:sachin,
  name:"Mr. Sachin Joshi",
  resignantion:"Section Head Dept of Pharmacology and PK Adgyl Lifesciences Private Limited Banglore,",
  country:"India",
  id:'IN'
},
{
  img:ishita,
  name:"Ms. Ishita Shrivastava",
  resignantion:"Senior Manager, Patlex Business Solutions,",
  country:"India",
  id:'IN'
},

{
  img:nitin,
  name:"Dr. Nitin Mali",
  resignantion:"MSc, PhD., Clinical Project Leader -Sanofi Aventis,",
  country:"India",
  id:'IN'
},



















    // {
    //     img:g1,
    //     name:"Dr. Mihir Gharia",
    //     resignantion:"Head Medical Services Tatvacare, Digicare Health Solutions Pvt. Ltd, ",
    //     country:"India",
    //     id:'IN'
    // },
    // {
    //   img:g2,
    //     name:"Dwi Marlina Syukri",
    //     resignantion:"S.Si.,M.BSc., Ph.D Malahayati University, Lampung, ",
    //     country:'Indonesia',
    //     id:"ID"
    // },
    // {
    //   img:g3,
    //     name:"Dr. Asep Saefurohman",
    //     resignantion:"S.Si., M.Si.,Universitas Islam Negeri, Banten,",
    //     country:'Indonesia',
    //     id:"ID"
    // },
    // {
    //   img:g4,
    //     name:"Dr. Nor Kamalia Binti Zahari",
    //     resignantion:"Director of Center of Biomedical Engineering University of Cyberjaya, ",
    //     country:"Malaysia",
    //     id:"MY"
    // },
    // {
    //   img:g5,
    //     name:"Mahendra Kumar Rai",
    //     resignantion:"Senior Director & Regional Head HEOR, RWE & Medical Affairs EVERSANA APAC, ",
    //     country:"Singapore",
    //     id:"SG"
    // },{
    //   img:g6,
    //     name:"Mr. Nirnith Devireddy",
    //     resignantion:"CEO & Founder of InSilicoMinds",
    //     country:'Uinited States of America',
    //     id:"US"
    // },
]

useLayoutEffect(() => {
  window.scrollTo(0, 0)
},[]);

  return (
    <>
    <h3 style={{textAlign:'center',background:'#3E4598', margin:'0px',paddingTop:'10PX',color:'yellowgreen'}}>OUR GUESTS</h3>

    
    <Container fluid style={{ display:'flex', alignContent:'center'}}>
        
        <Row md={4} className='m-4 justify-content-center w-100'>
            {guestData.map((data, index) => (
                <Card className='m-3 border-0' style={{backgroundColor:'#3E4598', color:'white'}}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body className="p-0 d-flex flex-column justify-content-center">
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>
                   {data.resignantion}
                   <br/>
                   <ReactCountryFlag
                countryCode={data.id}
                svg
                style={{
                    width: '1em',
                    height: '1em',

                }}
                title={data.country}
            />
            <span> </span>
                   {data.country}
                  </Card.Text>
                  
                </Card.Body>
              </Card>
             
            ))}
          </Row>
        </Container>
    
    </>
  )
}

export default Guests