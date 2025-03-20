import React from "react";
import { redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import wpImg from "/wp.jpg";
function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    toast("Message send sucsessful.");
    redirect("/#hero");
  };
  return (
    <section
      id="contact"
      className="h-[calc(100vh+80px)] flex flex-col justify-center md:snap-start"
    >
      <ToastContainer />
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
          <a className=" underline text-blue-950" href="https://www.google.com/maps/place/Kurua+Rd/@24.7762721,91.7747935,17z/data=!4m15!1m8!3m7!1s0x375104224a77d4ed:0x2382fee02fb56fb2!2sKurua+Rd!3b1!8m2!3d24.7757948!4d91.7655452!16s%2Fg%2F11bx288ycs!3m5!1s0x375104224a77d4ed:0x2382fee02fb56fb2!8m2!3d24.7757948!4d91.7655452!16s%2Fg%2F11bx288ycs?entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D">
            Kurua, Osmaninagar, Sylhet.
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
