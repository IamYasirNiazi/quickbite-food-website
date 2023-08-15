import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Logo from '../assets/images/logo.png'


const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <Container className='footer__container'>
                <Row className='footer__container__row'>
                    <Col className='footer__container__row__col col col-md-12 col-lg-12'>
                        <div className="footer__container__row__col__main">
                            <a href="/">
                                <img src={Logo} alt="Logo" className='img-fluid' />
                            </a>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Pizza</a></li>
                                <li><a href="/">Burgers</a></li>
                                <li><a href="/">Add to Cart</a></li>
                                <li><a href="/">Register</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                            <div>
                            <a href="/"><i class="ri-facebook-fill"></i></a>
                            <a href="/"><i class="ri-instagram-fill"></i></a>
                            <a href="/"><i class="ri-behance-fill"></i></a>
                            <a href="/"><i class="ri-twitter-fill"></i></a>
                            <a href="/"><i class="ri-github-fill"></i></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </footer>
    </>
  )
}

export default Footer