import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import mailIcon from "../../assets/images/email.svg";
import titleIcon from "../../assets/images/label.svg";
import textIcon from "../../assets/images/sms.svg";

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentForm = form.current;
    // this prevents sending emails if there is no form.
    // in case currentForm cannot possibly ever be null,
    // you could alert the user or throw an Error, here
    if (currentForm == null) return;

    // define Email Js Service ID and ensure it is not empty
    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    if (emailjsServiceId === null || emailjsServiceId === undefined)
      throw new Error("Service Id empty");

    // define Email Js Template ID and ensure it is not empty
    const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    if (emailJsTemplateId === null || emailJsTemplateId === undefined)
      throw new Error("Template Id empty");

    // define Email Js Public Key and ensure it is not empty
    const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (emailJsPublicKey === null || emailJsPublicKey === undefined)
      throw new Error("emailJsPublicKey Id empty");

    emailjs
      .sendForm(
        emailjsServiceId,
        emailJsTemplateId,
        currentForm,
        emailJsPublicKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    currentForm.reset();
  };

  return (
    <section id="contact" className="text-slate-100 bg-cloud-blue-500 sm:w-1/2">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="p-4 mx-auto rounded-lg flex flex-col gap-1 sm:max-w-md"
      >
        <h2 className="text-xl text-center font-extrabold sm:text-3xl">
          Contact Me
        </h2>
        <label className="sm:text-lg">Email</label>
        <div className="relative">
          <img src={mailIcon} alt="mail icon" className="absolute w-6 ml-1" />
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            className="pl-8 rounded-md text-gray-500 w-full"
          />
        </div>
        <label className="sm:text-lg">Subject</label>
        <div className="relative">
          <img src={titleIcon} alt="title icon" className="absolute w-6 ml-1" />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full pl-8 rounded-md text-gray-500"
          />
        </div>
        <label className="sm:text-lg">Message</label>
        <div>
          <img
            src={textIcon}
            alt="text icon"
            className="absolute w-6 ml-1 mt-1"
          />
          <textarea
            name="message"
            placeholder="Let's connect!"
            className="w-full pl-8 rounded-md text-gray-500"
          />
        </div>
        <input
          type="submit"
          value="Send"
          className="p-4 my-2 bg-cloud-blue-300 rounded-full cursor-pointer text-sm sm:text-lg"
        />
      </form>
    </section>
  );
}
