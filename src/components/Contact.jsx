import React from "react";
function Contact() {

  return (
    <section
      id="contact"
      className="h-[calc(100vh+80px)] flex flex-col justify-center md:snap-start"
    >
      <div className="w-4/5 max-w-lg mx-auto bg-slate-50 px-5 py-10 rounded-lg text-lg">
        <h3 className="font-medium text-2xl text-black">Contact Info</h3>

        <p>
          <b>Name:</b> Munazzirul Hassan
        </p>
        <p>
          <b>Email:</b>{" "}
          <a
            href="mailto:munazzirulhassan@gmail.com"
            className=" underline text-blue-950 text-lg"
          >
            munzzirulhassan@gmail.com
          </a>
        </p>
        <p>
          <b>Phone:</b>{" "}
          <a href="tel:+8801715335833" className=" underline text-blue-950">
            +8801715335833
          </a>
        </p>
        <p>
          <b>Location:</b>{" "}
          <a  href="https://www.google.com/maps/place//@24.77881,91.78379,17z/data=!4m6!1m5!3m4!2zMjTCsDQ2JzQzLjciTiA5McKwNDcnMDEuNiJF!8m2!3d24.77881!4d91.78379?entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D" target="_blank" className=" underline text-blue-950">
            Kurua, Osmaninagar, Sylhet.
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
