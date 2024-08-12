import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
function Home() {
    return (
        <div>
            <style>{'body{background-color:skyblue;}'}</style>
            <h1 style={{ textAlign: "center",backgroundColor:"skyblue" }}>Maxcomp<Badge bg="secondary">Sales & Services</Badge></h1>
            <img src="computer.jpeg" alt="Computer" style={{ height: "450px", width: "100%" }} />
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>About</Accordion.Header>
                    <Accordion.Body>
                        A computer shop is a retail establishment specializing in the sale, repair, and maintenance of computers and related equipment. These shops often offer a wide range of products, including desktop computers, laptops, tablets, peripherals (such as keyboards, mice, and monitors), and accessories like cables, adapters, and storage devices. In addition to hardware, many computer shops also sell software, including operating systems, office suites, antivirus programs, and various applications.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Location (Click the image for Google Maps)</Accordion.Header>
                    <Accordion.Body>
                        <a href="https://www.google.com/maps/place/Maxcomp+sales+%26+services/@3.8265634,103.3348999,17z/data=!3m1!4b1!4m6!3m5!1s0x31c8bac2236f294d:0x96ec7dfc9dd67dc9!8m2!3d3.8265634!4d103.3374748!16s%2Fg%2F1vhlvp49?entry=ttu" target='_blank'>
                            <img src="maps.png" style={{ width: "100%" }} /></a>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Home