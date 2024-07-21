import React from 'react'
import Styles from './ContactStyles.module.css'
import Heading from '../../common/Heading'
import  '../../App.css'

function Contact() {
  return (
    <section className={Styles.container}>
        <Heading content="Contact"/>
        <form className={Styles.form} action='mailto:msanjaypandian@gmail.com' method='post'>
            <input type="text" placeholder='Name' required/>
            <input type="email" name="email" id="email" required placeholder='Email' />
            <textarea placeholder='Body'></textarea>
            <div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
            </div>
        </form>
    </section>
  )
}

export default Contact