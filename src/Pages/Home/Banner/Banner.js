import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner 1.jpg';
import banner2 from '../../../images/banner/banner 2.jpg';
import banner3 from '../../../images/banner/banner 3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Plaisterers' Hall</h3>
                        <p>As London’s Largest Livery Hall we have plentiful space to accommodate a multiplicity of events</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Ironmongers' Hall</h3>
                        <p>The home of the Ironmongers' Company in the heart of London, the Hall is available to hire for weddings</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Glaziers Hall</h3>
                        <p>Glaziers’ Hall is the only Livery Hall south of the Thames.  Located at the south end of London Bridge it is a former dockside warehouse dating from the early 19th century. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;