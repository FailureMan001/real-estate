/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "01356352-1e4d-4e54-a13a-080996cb4fc7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Success", res);
    }
  };
  return (
    <div className="container mx-auto -mt-3">
      <div className="section bg-blue-100">
        <div className="section-title">CONTACT US</div>
        <div className="section-subtitle">
          Exlore our rich and diverse portfolioExlore our rich and diverse
          portfolioExlore our rich and diverse portfolioExlore our rich and
          diverse portfolioExlore our rich and diverse portfolio
        </div>
      </div>

      <div className="w-full bg-blue-200">
        <div className="flex flex-wrap text-center text-white">
          {/* About Column */}
          <div className="flex justify-center w-full md:w-1/2 p-5 border-r border-orange-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3063695786805!2d100.49338541527408!3d13.760389000800732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2996d6ec109b5%3A0xac746fc8006894b5!2z4Lin4Lix4LiU4LiK4LiZ4Liw4Liq4LiH4LiE4Lij4Liy4LihIOC4o-C4suC4iuC4p-C4o-C4oeC4q-C4suC4p-C4tOC4q-C4suC4ow!5e0!3m2!1sth!2sth!4v1677855875420!5m2!1sth!2sth"
              width={600}
              height={450}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/*  Column */}
          <div className="w-full md:w-1/2 p-5 border-r border-blue-800 md:text-left">
            <form
              onSubmit={onSubmit}
              className="text-gray-700 body-font relative"
            >
              <div className="container px-5 py-1 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Contact Us
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Whatever cardigan tote bag tumblr hexagon brooklyn
                    asymmetrical gentrify.
                  </p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="email"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          htmlFor="message"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <button
                        type="submit"
                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
