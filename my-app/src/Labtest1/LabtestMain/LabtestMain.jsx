import React from 'react'
import {AiFillPhone} from "react-icons/ai"
import Styles from "./_Labtestmain.module.css"

const LabtestMain = () => {
  return (
    <section  id={Styles.maincontentBlock}>
        <article>
            <div>
            <figure>
                <img src="https://www.practo.com/tests/public/images/call_to_order.svg" alt="img"/>
            </figure>
            
               <main>
               <h1>
                Need help with booking your test?
                </h1>
                <h4>
                Our experts are here to help you
                </h4>
               </main>
            </div>
           <div className={Styles.PhoneBlock}>
           <h1>
                <AiFillPhone/>
            +91 8045684087
            </h1>
           </div>

        
        </article>

        <h1 className={Styles.cardHeading}>Top Booked Diagnostic Tests</h1>

        <aside className={Styles.mainCard}>
            <div className={Styles.card1}>
                <h2 className={Styles.heading1}>Thyroid Profile (T3, T4, TSH)</h2>
                <h4 className={Styles.heading2}>known as Thyroid Profile Total Blood</h4>
                <h3 className={Styles.heading3}>E-Reports on next day</h3>
                <h1 className={Styles.heading4}>₹ 570</h1>
                <h5>Add</h5>
            </div>
            <div className={Styles.card1}>
                <h2 className={Styles.heading1}>Thyroid Profile (T3, T4, TSH)</h2>
                <h4 className={Styles.heading2}>known as Thyroid Profile Total Blood</h4>
                <h3 className={Styles.heading3}>E-Reports on next day</h3>
                <h1 className={Styles.heading4}>₹ 570</h1>
                <h5>Add</h5>
            </div>
            <div className={Styles.card1}>
                <h2 className={Styles.heading1}>Thyroid Profile (T3, T4, TSH)</h2>
                <h4 className={Styles.heading2}>known as Thyroid Profile Total Blood</h4>
                <h3 className={Styles.heading3}>E-Reports on next day</h3>
                <h1 className={Styles.heading4}>₹ 570</h1>
                <h5>Add</h5>
            </div>
            <div className={Styles.card1}>
                <h2 className={Styles.heading1}>Thyroid Profile (T3, T4, TSH)</h2>
                <h4 className={Styles.heading2}>known as Thyroid Profile Total Blood</h4>
                <h3 className={Styles.heading3}>E-Reports on next day</h3>
                <h1 className={Styles.heading4}>₹ 570</h1>
                <h5>Add</h5>
            </div>
            <div className={Styles.card1}>
                <h2 className={Styles.heading1}>Thyroid Profile (T3, T4, TSH)</h2>
                <h4 className={Styles.heading2}>known as Thyroid Profile Total Blood</h4>
                <h3 className={Styles.heading3}>E-Reports on next day</h3>
                <h1 className={Styles.heading4}>₹ 570</h1>
                <h5>Add</h5>
            </div>
            <div className={Styles.card1}>
                <h2 className={Styles.heading1}>Thyroid Profile (T3, T4, TSH)</h2>
                <h4 className={Styles.heading2}>known as Thyroid Profile Total Blood</h4>
                <h3 className={Styles.heading3}>E-Reports on next day</h3>
                <h1 className={Styles.heading4}>₹ 570</h1>
                <h5>Add</h5>
            </div>
            <div className={Styles.card1}>
                <h2 className={Styles.heading1}>Thyroid Profile (T3, T4, TSH)</h2>
                <h4 className={Styles.heading2}>known as Thyroid Profile Total Blood</h4>
                <h3 className={Styles.heading3}>E-Reports on next day</h3>
                <h1 className={Styles.heading4}>₹ 570</h1>
                <h5>Add</h5>
            </div>

         
        </aside>
        <main  className={Styles.HealthconcernBlock}>
            <h1>Find Tests by Health Concern</h1>
            <div className={Styles.HealthconcernImg}>
                <figure>
                    <img src="https://www.practo.com/tests/public/images/landingpage_icons/Fever.svg?v=1569493559"/>
                    <h1>Fever</h1>
                </figure>
                <figure>
                    <img src="https://www.practo.com/tests/public/images/landingpage_icons/Diabetes.svg?v=1569493559"/>
                    <h1>Diabetes</h1>
                </figure>
                <figure>
                    <img src="	https://www.practo.com/tests/public/images/landingpage_icons/Skin.svg?v=1569493559"/>
                    <h1>Skin</h1>
                </figure>
                <figure>
                    <img src="	https://www.practo.com/tests/public/images/landingpage_icons/Kidney.svg?v=1569493559"/>
                    <h1>Kidney</h1>
                </figure>
                <figure>
                    <img src="	https://www.practo.com/tests/public/images/landingpage_icons/Stomach.svg?v=1569493559"/>
                    <h1>Diagestion</h1>
                </figure>
                <figure>
                    <img src="https://www.practo.com/tests/public/images/landingpage_icons/Cancer.svg?v=1569493559"/>
                    <h1>Cancer</h1>
                </figure>
            </div>
        </main>
    </section>
  )
}

export default LabtestMain
