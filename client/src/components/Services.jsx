import React, { useRef, useState } from 'react';
import Ganapathi from "../images/ganapathi.jpeg";
import Lakshmi from '../images/Lakshmi.jpeg';
import Satya from '../images/Satyanarayana.jpeg';
import Shiva from '../images/shiva.jpeg';
import Nava from '../images/navagrahas.jpeg';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Footer from "./Footer";
import Navigation from "./Navigation";
import "./styles/Home.css";
import "./styles/Services.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "../images/omkaar.png";
//import BG from "../images/background.PNG";


function Services() {
    const scrollContainerRefHomams = useRef(null);
    const scrollContainerRefPoojas = useRef(null);
    const [selectedService, setSelectedService] = useState(null);
    const [isFixed, setFixed] = useState(false);

    // Function to scroll left
    const scrollLeft = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    // Function to scroll right
    const scrollRight = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const services = [
        {
            id: 1,
            src: Ganapathi,
            alt: 'ganapathi',
            description: 'Ganapathi Homam - 151$',
            data: 'Ganapathi homam is performed to beget happiness, prosperity and good health. Anyone is desirous of praying to God to remove any obstacles in any of his plan/ work/Business /action and also to be victorious in his deeds can pray to Lord Ganesha. Ganapathi homam can be performed to please Kethu and hence anyone who has Kethu dasa or bhukthi or wishes to appease Kethu can participate in the homam. Performing Ganapathy Homam once every year gives prosperity, health and wealth. Especially in Kerala &Tamilnadu People Starts All Rituals By Performing Ganapathi Homam. As per ganesh puran plenty types of ganapathi homam can be done example: Mahaganapathi Homam, Asthadravya Ganapathi Homam, Sahasra modaka Ganapathi Homam,etc.',
        },
        {
            id: 2,
            src: Lakshmi,
            alt: 'Image 2',
            description: 'Lakshmi Pooja - 151$',
            data: 'Ganapathi homam is performed to beget happiness, prosperity and good health. Anyone is desirous of praying to God to remove any obstacles in any of his plan/ work/Business /action and also to be victorious in his deeds can pray to Lord Ganesha. Ganapathi homam can be performed to please Kethu and hence anyone who has Kethu dasa or bhukthi or wishes to appease Kethu can participate in the homam. Performing Ganapathy Homam once every year gives prosperity, health and wealth. Especially in Kerala &Tamilnadu People Starts All Rituals By Performing Ganapathi Homam. As per ganesh puran plenty types of ganapathi homam can be done example: Mahaganapathi Homam, Asthadravya Ganapathi Homam, Sahasra modaka Ganapathi Homam,etc.',

        },
        {
            id: 3,
            src: Satya,
            alt: 'Image 3',
            description: 'Satyanarayan pooja - 151$',
            data: 'Ganapathi homam is performed to beget happiness, prosperity and good health. Anyone is desirous of praying to God to remove any obstacles in any of his plan/ work/Business /action and also to be victorious in his deeds can pray to Lord Ganesha. Ganapathi homam can be performed to please Kethu and hence anyone who has Kethu dasa or bhukthi or wishes to appease Kethu can participate in the homam. Performing Ganapathy Homam once every year gives prosperity, health and wealth. Especially in Kerala &Tamilnadu People Starts All Rituals By Performing Ganapathi Homam. As per ganesh puran plenty types of ganapathi homam can be done example: Mahaganapathi Homam, Asthadravya Ganapathi Homam, Sahasra modaka Ganapathi Homam,etc.',

        },
        {
            id: 4,
            src: Shiva,
            alt: 'Image 3',
            description: 'Shiva pooja - 151$',
            data: 'Ganapathi homam is performed to beget happiness, prosperity and good health. Anyone is desirous of praying to God to remove any obstacles in any of his plan/ work/Business /action and also to be victorious in his deeds can pray to Lord Ganesha. Ganapathi homam can be performed to please Kethu and hence anyone who has Kethu dasa or bhukthi or wishes to appease Kethu can participate in the homam. Performing Ganapathy Homam once every year gives prosperity, health and wealth. Especially in Kerala &Tamilnadu People Starts All Rituals By Performing Ganapathi Homam. As per ganesh puran plenty types of ganapathi homam can be done example: Mahaganapathi Homam, Asthadravya Ganapathi Homam, Sahasra modaka Ganapathi Homam,etc.',

        },
        {
            id: 5,
            src: Nava,
            alt: 'Image 3',
            description: 'Navagraha pooja - 151$',
            data: 'Ganapathi homam is performed to beget happiness, prosperity and good health. Anyone is desirous of praying to God to remove any obstacles in any of his plan/ work/Business /action and also to be victorious in his deeds can pray to Lord Ganesha. Ganapathi homam can be performed to please Kethu and hence anyone who has Kethu dasa or bhukthi or wishes to appease Kethu can participate in the homam. Performing Ganapathy Homam once every year gives prosperity, health and wealth. Especially in Kerala &Tamilnadu People Starts All Rituals By Performing Ganapathi Homam. As per ganesh puran plenty types of ganapathi homam can be done example: Mahaganapathi Homam, Asthadravya Ganapathi Homam, Sahasra modaka Ganapathi Homam,etc.',

        },
        {
            id: 6,
            src: Nava,
            alt: 'Image 3',
            description: 'Navagraha pooja - 151$',
            data: 'Ganapathi homam is performed to beget happiness, prosperity and good health. Anyone is desirous of praying to God to remove any obstacles in any of his plan/ work/Business /action and also to be victorious in his deeds can pray to Lord Ganesha. Ganapathi homam can be performed to please Kethu and hence anyone who has Kethu dasa or bhukthi or wishes to appease Kethu can participate in the homam. Performing Ganapathy Homam once every year gives prosperity, health and wealth. Especially in Kerala &Tamilnadu People Starts All Rituals By Performing Ganapathi Homam. As per ganesh puran plenty types of ganapathi homam can be done example: Mahaganapathi Homam, Asthadravya Ganapathi Homam, Sahasra modaka Ganapathi Homam,etc.',

        },
        {
            id: 7,
            src: Nava,
            alt: 'Image 3',
            description: 'Navagraha pooja - 151$',
            data: 'Ganapathi homam is performed to beget happiness, prosperity and good health. Anyone is desirous of praying to God to remove any obstacles in any of his plan/ work/Business /action and also to be victorious in his deeds can pray to Lord Ganesha. Ganapathi homam can be performed to please Kethu and hence anyone who has Kethu dasa or bhukthi or wishes to appease Kethu can participate in the homam. Performing Ganapathy Homam once every year gives prosperity, health and wealth. Especially in Kerala &Tamilnadu People Starts All Rituals By Performing Ganapathi Homam. As per ganesh puran plenty types of ganapathi homam can be done example: Mahaganapathi Homam, Asthadravya Ganapathi Homam, Sahasra modaka Ganapathi Homam,etc.',

        },
        {
            id: 8,
            src: Nava,
            alt: 'Image 3',
            description: 'Navagraha pooja - 151$',
            data: 'Ganapathi homam is performed to beget happiness, prosperity and good health. Anyone is desirous of praying to God to remove any obstacles in any of his plan/ work/Business /action and also to be victorious in his deeds can pray to Lord Ganesha. Ganapathi homam can be performed to please Kethu and hence anyone who has Kethu dasa or bhukthi or wishes to appease Kethu can participate in the homam. Performing Ganapathy Homam once every year gives prosperity, health and wealth. Especially in Kerala &Tamilnadu People Starts All Rituals By Performing Ganapathi Homam. As per ganesh puran plenty types of ganapathi homam can be done example: Mahaganapathi Homam, Asthadravya Ganapathi Homam, Sahasra modaka Ganapathi Homam,etc.',

        },
    ];

    const handleClick = (service) => {
        setSelectedService(service);
    }

    const handleSchedule = () => {
        setFixed(true);
    }

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <div className="container">
            <img
                loading="lazy"
                src= {Banner}
                alt="Omkaar Temple banner"
                className="banner-image"
            />
            <Navigation />
            <main className="main-content">
                {/* <img
                    loading="lazy"
                    src={BG}
                    alt="Temple background"
                    className="background-image"
                /> */}
                <Container fluid>
                    {selectedService ? (<>{isFixed === true ? (
                        <section className='content-section'>
                            <div>
                                <Row className='row'>
                                    <h2 className="section-title">Services</h2>
                                    <Col md={7}>
                                        <div className="services-desc">
                                            <h4 className='section-title'>Schedule Appointment: ({selectedService.description})</h4>
                                            <div style={{width: "80%"}}>
                                            <Form style={{padding: "20px"}}>
                                                <Form.Group controlId="formFirstName">
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your first name" onChange={handleChange} />
                                                </Form.Group>
                                                <Form.Group controlId="formPhone">
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control type="tel" placeholder="Enter your phone number" onChange={handleChange} />
                                                </Form.Group>
                                                <Form.Group controlId="formEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter your email" onChange={handleChange} />
                                                </Form.Group>
                                                <Form.Group controlId="formAddress">
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your address" onChange={handleChange} />
                                                </Form.Group><br/>
                                                <Button variant="primary" className="save-button" onClick={handleSubmit}>Schedule</Button>
                                            </Form>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={5} style={{display: "flex", alignItems:"center", justifyContent: "center"}}>
                                        <img src={selectedService.src} alt={selectedService.alt} className="service-image" />
                                    </Col>
                                </Row>
                            </div>
                        </section>
                    ) : (
                        <Row>
                            <Col className="Service-tab">
                                <h2 className="section-title">Services</h2>
                                <div className="services-desc">
                                    <h3 className='section-title'>{selectedService.description}</h3>
                                    <div style={{ textAlign: "center", padding: "0px" }}>
                                        <p>{selectedService.data}</p>
                                        <img src={selectedService.src} alt={selectedService.alt} className="service-image" />
                                        <div style={{padding: "20px"}}>
                                           <Button variant="primary" className='schedule-button'>Schedule Appointment</Button>
                                        </div>
                                    </div> 
                                </div>
                            </Col>
                        </Row>
                    )}</>
                    ) : (
                        <Row>
                            <Col className="Service-tab">
                                <h2 className="section-title">Services</h2>
                                <div className="services-desc">
                                    <h3 className="service-title">"By Request" Services</h3>
                                    <p>The following "by request" services can be performed at either the Temple or at a location of the devotees choosing.</p>
                                    <p>Donation for services performed away from Temple site (e.g., Warsaw, IN): $201.00</p>
                                    <p>Donation for services performed at Temple listed below.</p>
                                    <p>Scheduling or Questions: <a href="/contact">Contact</a></p>
                                </div>
                            </Col>
                            <Col>
                                <h2 className='section-title'>Homams</h2>
                                <div className="scroll-container">
                                    <Button onClick={() => scrollLeft(scrollContainerRefHomams)} className="scroll-button left-button">&lt;</Button>
                                    <div className="horizontal-scroll" ref={scrollContainerRefHomams}>
                                        {services.map((service, index) => (
                                            <div className="image-container" key={index}>
                                                <img src={service.src} alt={service.alt} className="service-image" onClick={() => handleClick(service)} />
                                                <p className="image-description">{service.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <Button onClick={() => scrollRight(scrollContainerRefHomams)} className="scroll-button right-button">&gt;</Button>
                                </div>
                            </Col>
                            <Col>
                                <h2 className='section-title'>Poojas</h2>
                                <div className="scroll-container">
                                    <Button onClick={() => scrollLeft(scrollContainerRefPoojas)} className="scroll-button left-button">&lt;</Button>
                                    <div className="horizontal-scroll" ref={scrollContainerRefPoojas}>
                                        {services.map((service, index) => (
                                            <div className="image-container" key={index}>
                                                <img src={service.src} alt={service.alt} className="service-image" onClick={() => handleClick(service)} />
                                                <p className="image-description">{service.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <Button onClick={() => scrollRight(scrollContainerRefPoojas)} className="scroll-button right-button">&gt;</Button>
                                </div>
                            </Col>
                        </Row>
                    )}
                </Container>
            </main>
            <Footer />
        </div>
    );
}

export default Services;
