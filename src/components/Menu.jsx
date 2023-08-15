import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import product1 from '../assets/images/p1.jpg'


const Menu = () => {
  return (
    <>
        <section className='our-menu'>
            <Container className='our-menu__container'>
                <Row className='our-menu__container__row'>
                    <Col className='our-menu__container__row__col col col-md-12 col-lg-12'>
                    <div className='our-menu__container__row__col__main'>
                        <div className='our-menu__container__row__col__main__content'>
                            <h6>Trending</h6>
                            <h2>Menu That Always<br/>Make You Fall In Love</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum explicabo ipsam et sit quibusdam voluptates commodi totam dolorem ea accusantium.</p>
                        </div>
                        <div className='our-menu__container__row__col__main__slider owl-carousel owl-theme' id='menu'>
                            <div className='our-menu__container__row__col__main__slider__product item'>
                                <div className='text'>
                                    <h5>Italian Pizza</h5>
                                    <h6><span>$</span>7.49</h6>
                                    <a href="/">Order Now <i class="ri-arrow-drop-right-line"></i></a>
                                </div>
                                <div className='image'>
                                    <img src={product1} alt="Product" className='img-fluid' />
                                </div>
                            </div>
                            <div className='our-menu__container__row__col__main__slider__product item'>
                                <div className='text'>
                                    <h5>Italian Pizza</h5>
                                    <h6><span>$</span>7.49</h6>
                                    <a href="/">Order Now <i class="ri-arrow-drop-right-line"></i></a>
                                </div>
                                <div className='image'>
                                    <img src={product1} alt="Product1" className='img-fluid' />
                                </div>
                            </div>
                            <div className='our-menu__container__row__col__main__slider__product item'>
                                <div className='text'>
                                    <h5>Italian Pizza</h5>
                                    <h6><span>$</span>7.49</h6>
                                    <a href="/">Order Now <i class="ri-arrow-drop-right-line"></i></a>
                                </div>
                                <div className='image'>
                                    <img src={product1} alt="Product2" className='img-fluid' />
                                </div>
                            </div>
                            <div className='our-menu__container__row__col__main__slider__product item'>
                                <div className='text'>
                                    <h5>Italian Pizza</h5>
                                    <h6><span>$</span>7.49</h6>
                                    <a href="/">Order Now <i class="ri-arrow-drop-right-line"></i></a>
                                </div>
                                <div className='image'>
                                    <img src={product1} alt="Product3" className='img-fluid' />
                                </div>
                            </div>
                            <div className='our-menu__container__row__col__main__slider__product item'>
                                <div className='text'>
                                    <h5>Italian Pizza</h5>
                                    <h6><span>$</span>7.49</h6>
                                    <a href="/">Order Now <i class="ri-arrow-drop-right-line"></i></a>
                                </div>
                                <div className='image'>
                                    <img src={product1} alt="Product4" className='img-fluid' />
                                </div>
                            </div>

                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Menu