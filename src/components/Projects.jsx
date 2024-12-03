import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <div className=" md:mx-40 mx-6">
        <h2 className="p-7 text-center underline text-2xl font-semibold uppercase">
          PROJECTS
        </h2>
        <ul className="list-disc">
          <li className="text-2xl my-2 text-start md:mr-0">
            <span className="font-semibold ">Admin Panel Management</span>,
            Handle data coming to backend panel
            <ul className=" pl-5">
              <li className="text-xl">
                <span className="font-semibold">Description:</span> Developed a
                dynamic and user-friendly admin panel to manage and display data
                submitted by customers from the front end. The project includes
                full CRUD (Create, Read, Update, Delete) operations with data
                handled in the backend using MySQL and PHP.
              </li>
              <li className="text-xl">
                <span className="font-semibold">Technologies:</span> HTML, CSS,
                JavaScript, Bootstrap, MySQL, PHP
              </li>
              {/* <li className="text-xl">
                <a
                  href="" // Replace with your actual project link
                  className="font-semibold text-blue-600 hover:underline ml-1"
                >
                  View Project
                </a>
              </li> */}
            </ul>
          </li>
          <li className="text-2xl my-2 text-start md:mr-0">
            <span className="font-semibold">
              Personal Portfolio Built with React
            </span>
            <ul className="pl-5">
              <li className="text-xl">
                <span className="font-semibold">Description:</span> My personal
                portfolio provides an overview of my skills and projects,
                emphasizing my ability to create dynamic and user-friendly
                interfaces for efficient data management. One of the showcased
                projects involves inserting data from a contact form into a
                MySQL database, demonstrating practical application of backend
                technologies.
              </li>
              <li className="text-xl">
                <span className="font-semibold">Technologies:</span>HTML, CSS,
                JavaScript, Tailwind CSS, React , PHP and MYSQL.
              </li>
              <li className="text-xl">
                <a
                  href="https://ruchika-khairkar-portfolio.vercel.app/"
                  className="font-semibold text-blue-600 hover:underline ml-1"
                >
                  View Project
                </a>
              </li>
            </ul>
          </li>
          <li className="text-2xl my-2 text-start md:mr-0">
            <span className="font-semibold ">
              Registration Form with jQuery Validation
            </span>
            <ul className="pl-5">
              <li className="text-xl">
                <span className="font-semibold">Description:</span> Developed a
                responsive registration form using HTML, CSS, and jQuery for
                client-side validation. The form includes fields for name,
                username, email, password, and confirm password, ensuring all
                fields are filled and passwords match before submission.
              </li>
              <li className="text-xl">
                <span className="font-semibold">Technologies:</span> HTML, CSS,
                jQuery
              </li>
              <li className="text-xl">
                <a
                  href="https://registration-form-drab.vercel.app/"
                  className="font-semibold text-blue-600 hover:underline ml-1"
                >
                  View Project
                </a>
              </li>
            </ul>
          </li>
          <li className="text-2xl my-2 text-start md:mr-0">
            <span className="font-semibold ">Job Portal Web Application</span>
            <ul className="pl-5">
              <li className="text-xl">
                <span className="font-semibold">Description:</span> Developed a
                dynamic job portal platform to streamline the job search
                experience for users. Implemented a responsive frontend using
                React, with key components including a search bar, job listings,
                and detailed job cards to display critical job information such
                as title, company, job type, location, and posting date.
                Integrated a PHP backend to handle job data retrieval from a
                MySQL database, enabling users to filter jobs by criteria like
                role, location, experience level, and job type. Utilized Axios
                for API requests, managed state efficiently with React hooks,
                and ensured cross-origin compatibility with CORS headers.
              </li>
              <li className="text-xl">
                <span className="font-semibold">Technologies:</span> React, PHP,
                MySQL, Axios, HTML, CSS, JavaScript
              </li>
              {/* <li className="text-xl">
                <a
                  href="https://registration-form-drab.vercel.app/"
                  className="font-semibold text-blue-600 hover:underline ml-1"
                >
                  View Project
                </a>
              </li> */}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
