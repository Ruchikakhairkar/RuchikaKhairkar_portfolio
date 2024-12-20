import React from "react";

const Internship = () => {
  return (
    <>
      <div id="internship">
        <h2 className="text-center mt-3 text-2xl uppercase font-semibold md:m-10 underline">
          Internship
        </h2>
        <div className="md:grid grid-cols-2 md:mx-40 mx-5 mt-5">
          <div>
            <img
              src="https://s3-ap-south-1.amazonaws.com/internshala-uploads-new/google_logo/63b31df4086aa1672682996.png"
              alt=""
              className="w-full"
            />
          </div>
          <div className="justify-self-auto">
            During my web developer internship at Tecnovibes Digital Services
            Pvt. Ltd., I worked on developing and maintaining responsive
            websites and web applications. I gained practical experience with
            front-end technologies like HTML, CSS, JavaScript, and React, as
            well as backend tools like PHP and MySQL. My responsibilities
            included creating user-friendly interfaces, optimizing site
            performance, and ensuring seamless integration between the front-end
            and back-end systems. This internship strengthened my skills in
            full-stack development and collaboration within a professional team.
            <div className="md:grid grid-cols-2 mt-3">
              <div>
                <a
                  href="https://tecnovibes.com/"
                  className="text-blue-600 font-semibold"
                >
                  Tecnovibes Digital Services Pvt. Ltd.
                </a>
                <ul className="list-none">
                  <li className="text-sm flex items-center">
                    <i className="fa-solid fa-location-dot mr-1"></i>
                    <span>
                      Sayaji Villa, Near Pari Company, Dhyari, Pune 41104
                    </span>
                  </li>
                </ul>
              </div>
              <div className="text-sm md:mt-4">
                <ul className="list-none">
                  <li className="flex items-center">
                    <i className="mr-2 fas fa-envelope"></i>
                    <p>Email - contact@tecnovibes.com</p>
                  </li>
                  <li className="flex items-center">
                    <i className="mr-2 fa-solid fa-phone"></i>
                    <p>Phone no. - +91- 73784 45561</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Internship;
