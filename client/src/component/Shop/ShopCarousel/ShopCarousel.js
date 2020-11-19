// import React, { useState } from 'react';
// import Carousel from "react-multi-carousel";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 3,
//         slidesToSlide: 3 // optional, default to 1.
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2,
//         slidesToSlide: 2 // optional, default to 1.
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1,
//         slidesToSlide: 1 // optional, default to 1.
//     }
// };

// const ShopCarousel = () => {
//     const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const allArray = arrays.map(arr => {
//         return (
//             <div class="card">
//                 <img class="card-img-top" src="https://img.freepik.com/free-photo/transparent-turquoise-drop-pure-water-feather-blurred-blue-background-macro-copyspace_97669-421.jpg?size=626&ext=jpg" alt="" />
//                 <div class="card-body">
//                     <h5 class="card-title">{arr}</h5>
//                     <p class="card-text">Some quick example text to </p>
//                     <div>
//                         <h4>$<span>300</span> </h4>
//                         <p className="text-muted"><del>$<span>350</span> </del> </p>
//                     </div>
//                     <a href="#" class="btn btn-primary w-100">Add to cart</a>
//                 </div>
//             </div>
//         )
//     })
//     return (
//         <Carousel
//             swipeable={false}
//             draggable={false}
//             showDots={true}
//             responsive={responsive}
//             ssr={true} // means to render carousel on server-side.
//             infinite={true}
//             autoPlay={this.props.deviceType !== "mobile" ? true : false}
//             autoPlaySpeed={1000}
//             keyBoardControl={true}
//             customTransition="all .5"
//             transitionDuration={500}
//             containerClass="carousel-container"
//             removeArrowOnDeviceType={["tablet", "mobile"]}
//             deviceType={this.props.deviceType}
//             dotListClass="custom-dot-list-style"
//             itemClass="carousel-item-padding-40-px"
//         >
//             <div>Item 1</div>
//             <div>Item 2</div>
//             <div>Item 3</div>
//             <div>Item 4</div>
//         </Carousel>
//     );
// };

// export default ShopCarousel;