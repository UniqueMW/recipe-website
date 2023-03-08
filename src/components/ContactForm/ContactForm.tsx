import * as React from 'react'
import { BsArrowRight } from 'react-icons/bs'
// import contactUs from 'assets/undraw_contact_us_re_4qqt.svg'

function ContactForm(): JSX.Element {
  const formId = process.env.REACT_APP_FORM_ID
  return (
    <section className="flex flex-col items-center justify-center h-[100vh] px-2 md:px-12">
      {/* <img src={contactUs} /> */}
      <form
        className="flex flex-col md:text-lg text-base font-sans space-y-6 border shadow-sm px-2 min-w-[50%] text-black tracking-wider py-6"
        action={`https://formsubmit.co/${formId !== undefined ? formId : ''}`}
        target="_blank"
        method="POST"
      >
        <h1 className="text-xl font-semibold tracking-wider">Contact Me</h1>
        <input
          type="text"
          placeholder="Full name"
          className="border py-1 px-2 shadow-sm outline-none"
          name="name"
          required
        />
        <input
          type="hidden"
          name="_subject"
          value="From Recipe web app!"
        ></input>
        <input
          type="email"
          placeholder="Email address"
          className="border py-1 px-2 outline-none shadow-sm"
          name="email"
          required
        />
        <textarea
          placeholder="Message...."
          className="border font-sans tracking-wider py-1 px-2 outline-none shadow-sm"
          name="message"
          required
        />
        <button
          type="submit"
          className="bg-action text-primary font-sans font-semibold tracking-wider max-w-fit self-center px-16 py-2 flex flex-row items-center justify-between"
        >
          Submit
          <BsArrowRight className="ml-2" />
        </button>
      </form>
    </section>
  )
}

export default ContactForm
