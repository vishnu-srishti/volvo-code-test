import * as React from 'react';
import './ProductListComponent.scss';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const data = require('../../api/cars.json');


interface ComponentProps {
    history?: History;
}
interface History {
    push: Function;
}

interface ComponentState {
    productList: any;
}

class ProductListComponent extends React.Component<ComponentProps, ComponentState> {

    state = {
        productList: data,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        const { productList } = this.state;

        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };
        return (

            <div className="product-list-wrap">
                <><Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        productList.map((item: any) =>
                            <div className="product-item">
                                <h4>{item.bodyType}</h4>
                                <p>{item.modelName}<span> {item.modelType}</span></p>
                                <div className="image-wrap">
                                    <img src={item.imageUrl} />
                                </div>
                                <ul>
                                    <li onClick={() => this?.props?.history?.push('/learn/' + item.id)}>learn</li>
                                    <li>{'>'}</li>
                                    <li onClick={() => this?.props?.history?.push('/shop/' + item.id)}>shop</li>
                                    <li>{'>'}</li>
                                </ul>

                            </div>
                        )}
                </Carousel></>
            </div>

        );
    }
}
export default ProductListComponent;