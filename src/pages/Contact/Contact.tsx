import { ContactForm, SEO } from 'components'
import * as React from 'react'

function Contact(): JSX.Element {
  return (
    <>
      <SEO
        title="contact me"
        description="Get in touch with the developer of this webapp."
        route="/contact"
      />
      <section className="min-h-[100vh]">
        <ContactForm />
      </section>
    </>
  )
}

export default Contact
