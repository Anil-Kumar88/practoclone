import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Styles from "./_corousel.module.css"
const Corousal = () => {
  return (
   <section id={Styles.CarouselBlock}>
    <article>
    <Carousel autoPlay>
                <div>
                    <img src="https://prod-dx.s3.amazonaws.com/dx/campaigns/dweb_images/Covidrelaunch.jpg" />

                </div>
                <div>
                    <img src="https://prod-dx.s3.amazonaws.com/dx/campaigns/dweb_images/TaxSaverBasicB.jpg" />

                </div>
                <div>
                    <img src="https://prod-dx.s3.amazonaws.com:443/dx/campaigns/dweb_images/BackToWorkBangalore.png" />

                </div>
            </Carousel>
    </article>
   </section>
  )
}

export default Corousal