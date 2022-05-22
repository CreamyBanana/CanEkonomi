import React from 'react'
import Form from './Form'
import '../styles/ContactSection.css'
import { ViewContainer, Logo, } from "../styles/View.style";
import contactImg from "../assets/contact.jpg";

const ContactSection = () => (
  <>
      <ViewContainer>
        <Logo src={contactImg} />
      </ViewContainer>
      <Form />
  </>
)

export default ContactSection
