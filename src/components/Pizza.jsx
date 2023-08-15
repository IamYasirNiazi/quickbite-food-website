import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import pizza from '../assets/images/pizza.png'

const Pizza = () => {
  return (
    <>
        <section className='pizza'>
            <Container className='pizza__container'>
                <div>
                    <h2>Pizza Collection</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, non.</p>
                </div>
                {/* <Row className='pizza__container__row'>
                    <Col className='pizza__container__row__col col col-md-3 col-lg-3'>
                        <div className="pizza__container__row__col__product">
                            <img src={pizza} alt="Pizza" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni Pizza</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='pizza__container__row__col col col-md-3 col-lg-3'>
                        <div className="pizza__container__row__col__product">
                            <img src={pizza} alt="Pizza" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni Pizza</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='pizza__container__row__col col col-md-3 col-lg-3'>
                        <div className="pizza__container__row__col__product">
                            <img src={pizza} alt="Pizza" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni Pizza</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='pizza__container__row__col col col-md-3 col-lg-3'>
                        <div className="pizza__container__row__col__product">
                            <img src={pizza} alt="Pizza" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni Pizza</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row> */}
                 <Row className='pizza__container__row'>
                    <Col className='pizza__container__row__col col col-md-12 col-lg-12 owl-carousel owl-theme' id='pizza'>
                        <div className="pizza__container__row__col__product">
                            <img src={pizza} alt="Pizza" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni Pizza</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn btn-order'>Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="pizza__container__row__col__product">
                            <img src={pizza} alt="Pizza" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni Pizza</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn btn-order'>Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="pizza__container__row__col__product">
                            <img src={pizza} alt="Pizza" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni Pizza</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn btn-order'>Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="pizza__container__row__col__product">
                            <img src={pizza} alt="Pizza" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni Pizza</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn btn-order'>Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="pizza__container__row__col__product">
                            <img src={pizza} alt="Pizza" className='img-fluid' />
                            <div className='content'>
                                <h5>Pepperoni Pizza</h5>
                                <p>Extra-virgin olive oil, garlic, onions, mushrooms and green olives.</p>
                                <h6>$99.49</h6>
                                <div className='order'>
                                    <span>
                                    <i class="ri-subtract-fill minus"></i>
                                    <span>1</span> 
                                    <i class="ri-add-fill plus"></i>
                                    </span>
                                    <button className='btn btn-order'>Order Now</button>
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

export default Pizza