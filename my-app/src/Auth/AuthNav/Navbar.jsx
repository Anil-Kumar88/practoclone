import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./_Authnav.module.css"
const Navbar = () => {
  return (
   <section id={Styles.navbarBlock}>
    <article className={Styles.nav}>
         <span><Link to="/login">Login</Link></span>
         <span><Link to="/register">Register</Link></span>
    </article>
   </section>
  )
}
export default Navbar
