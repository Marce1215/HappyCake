import React from 'react';
import { Container } from "react-bootstrap";

const Home = () => {
    const backgroundImage = '../img/queque.jpg';
    return (
        <Container className="text-center">
        <h1 className="pt-5">
          Biendenido a <span className="fw-bold">Happy Cake</span> 
        </h1>
        <h6> El lugar de los pasteles felices </h6>
        <img src="./img/queque.jpg" alt="" width="200px" height="150px"></img>
      </Container>
            )
}
            export default Home;