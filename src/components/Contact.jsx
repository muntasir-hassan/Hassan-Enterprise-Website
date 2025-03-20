import React from "react";
import { redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    toast("Message send sucsessful.")
    redirect('/#hero')
  };
  return (
    <section
      id="contact"
      className="h-[calc(100vh+80px)] flex flex-col justify-center md:snap-start"
    >
      <ToastContainer />
      <div className="w-4/5 max-w-lg mx-auto bg-green-800 px-5 py-10 rounded-lg">
        <h3 className="font-medium text-xl text-white">Contact Us</h3>
        <form action="#">
          <input
            type="text"
            placeholder="enter your name"
            className=" bg-transparent text-white border-2 border-[rgba(0,0,0,0.3)] w-full  px-2 py-1 rounded-md mt-2 outline-none"
          />
          <input
            type="text"
            placeholder="enter your email"
            className="bg-transparent text-white border-2 border-[rgba(0,0,0,0.3)] w-full px-2 py-1 rounded-md mt-2 outline-none"
          />
          <textarea
            name="msg"
            placeholder="say hi..."
            className=" bg-transparent text-white border-2 border-[rgba(0,0,0,0.3)] px-2 py-1 rounded-md mt-2 outline-none w-full min-h-[100px] max-h-[100px]"
          ></textarea>
          <button
            onClick={(e) => handleFormSubmit(e)}
            className="mt-4 px-4 py-2 bg-[#fff] text-green-900 font-medium text-lg w-32 text-center rounded-sm border-2 border-black hover:bg-green-900 hover:text-white transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
