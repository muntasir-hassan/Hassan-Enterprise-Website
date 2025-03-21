import React from "react";
import img1 from "/testimonial-image1.jpg";
import img2 from "/testimonial-image2.jpg";
import img3 from "/testimonial-image3.jpg";

function Testimonial() {
  return (
    <section
      id="testimonial"
      className="md:h-[calc(100vh+80px)] px-8 mt-20 md:snap-center md:flex flex-col justify-center lg:px-28"
    >
      <h3 className="font-medium text-3xl mb-4">Testimonials:</h3>
      <div className="md:grid grid-cols-3 max-w-4xl">
        <div className="flex flex-col ml-4 items-center min-w-56 max-md:w-3/5 rounded-xl bg-slate-50 py-8 mb-8 hover:shadow-green-950 shadow-2xl cursor-pointer transition-all duration-300 max-w-64 scale-90 hover:scale-100 ">
          <div className="h-32 w-32">
            <img src={img2} className="h-full rounded-full object-cover" />
          </div>
          <div className="px-3 py-2">
            <h3 className="font-medium text-xl text-center mb-1">
              Abidur Rahman
            </h3>
            <p>
              Hassan Enterprise provides top-quality products that help me
              deliver great results on every project. Highly recommend!
            </p>
          </div>
        </div>

        <div className="flex flex-col ml-4 items-center min-w-56 max-md:w-3/5 rounded-xl bg-slate-50 py-8 mb-8 hover:shadow-green-950 shadow-2xl cursor-pointer transition-all duration-300 max-w-64 max-md:scale-90 hover:scale-100 md:hover:scale-105 -translate-y-3">
          <div className="h-32 w-32">
            <img src={img1} className="h-full rounded-full object-cover" />
          </div>
          <div className="px-3 py-2">
            <h3 className="font-medium text-xl text-center mb-1">
              Mustak Miya
            </h3>
            <p>
              Supercrete made my home construction faster and more affordable.
              Excellent quality, would definitely use again!
            </p>
          </div>
        </div>

        <div className="flex flex-col ml-4 items-center min-w-56 max-md:w-3/5 rounded-xl bg-slate-50 py-8 mb-8 hover:shadow-green-950 shadow-2xl cursor-pointer transition-all duration-300 max-w-64 scale-90 hover:scale-100">
          <div className="h-32 w-32">
            <img src={img3} className="h-full rounded-full object-cover" />
          </div>
          <div className="px-3 py-2">
            <h3 className="font-medium text-xl text-center mb-1">
              Fokrul Ahmed
            </h3>
            <p>
              Great service and reliable products! Holcim Strong Structure
              really made a difference in my projects. Will keep coming back!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
