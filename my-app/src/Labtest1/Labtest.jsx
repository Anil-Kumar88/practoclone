import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import Styles from "./_labtest.module.css"

const Labtest = () => {
  return (
   <section id={Styles.firstPart}>
    <article>
        <form>
          <nav className={Styles.inputs}>
          <div className="form-group"><input type="text" placeholder='select any city or Location'/>
           <input type="text" placeholder='Search for Tests and Profiles' /></div>
          </nav>
           <figure className={Styles.img}>
<h1><AiOutlineShoppingCart/> <span>cart</span></h1>
           </figure>
        </form>
    </article>
   </section>
  )
}

export default Labtest
