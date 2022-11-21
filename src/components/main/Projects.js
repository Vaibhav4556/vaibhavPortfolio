import { Button } from "@mui/material";
import "./Projects.css";
import { useContext } from "react";
import { colorContext } from "./../../App";
import create1 from "./../../assets/pokecards/create1.png";
import trackexpense from "./../../assets/expensetrack/trackexpense.png";

import expense1 from "./../../assets/expensetrack/expense1.png";
import createStudent from "./../../assets/pokecards/createStudent.png";
import realLogin from "./../../assets/equipment/realLogin.png";
import realhome from "./../../assets/equipment/realhome.png";
import result from "./../../assets/equipment/result.png";

import cart from "./../../assets/healthcare/cart.png";
import home from "./../../assets/healthcare/home.png";
import movieHome from "./../../assets/favmovie/movieHome.png";
import reacticon from "./../../assets/techStack/react.png";
import nodeicon from "./../../assets/techStack/nodejs.svg";
import netlifyicon from "./../../assets/techStack/netlify-icon.svg";
import mongodbicon from "./../../assets/techStack/mongodb.svg";
import materialuiicon from "./../../assets/techStack/materialui.svg";
import herokuicon from "./../../assets/techStack/heroku-icon.svg";
import expressjsicon from "./../../assets/techStack/expressjs.png";
import bootstrapicon from "./../../assets/techStack/bootstrap.svg";
import razorpayicon from "./../../assets/techStack/razorpay.svg";
import javascripticon from "./../../assets/techStack/javascript.svg";
import { create } from "yup/lib/Reference";

function Projects() {
  const { bg, primary, secondary, tertiary } = useContext(colorContext);
  const bgColor = bg;
  const projectList = [
    {
      name: "Student Result Management App",
      about:
        "To find out the result of the pericular semester with respect to the roll number of the student. In this site admin can create result,edit result,and delete result .\n Students can view there result for there semesters and it will show detail scorecard for that roll number.",
      why: "During college time we will view result in similar way. So why isn't there any  site for all displaying the results. This is one that spraked me to create this site.",
      whatnext: [
        "To add more feature like notes and study material for subjects && it will take upto 7 days to approve registration request after verification",
      ],
      imgSrc: [realLogin, result],
      techStack: [
        reacticon,
        materialuiicon,
        nodeicon,
        expressjsicon,
        mongodbicon,
        // razorpayicon,
        herokuicon,
        netlifyicon,
      ],
      credentials: ["Employee Id : 12345  Password:123456"],
      github: "https://github.com/Vaibhav4556/result_management_36",
      live: "https://result-36.herokuapp.com/",
      bg: tertiary,
      text: secondary,
      heading: primary,
    },
    {
      name: "Pizza App",
      about:
        "In this app you can select your favourite pizaa from the menu and you can upadte the quantity it will automatically update the price of the items in the cart ",
      why: "Easy and simple way to order the favourite pizza",
      whatnext: [
        "To add admin pannel to make note  delivered and undelivered pizza, integrate with the payment gateway",
      ],
      imgSrc: [home, cart],
      techStack: [
        reacticon,
        materialuiicon,
        bootstrapicon,
        nodeicon,
        expressjsicon,
        mongodbicon,
        herokuicon,
        netlifyicon,
      ],
      credentials: [],

      github: "https://github.com/Vaibhav4556/pizzzzzza",
      live: "https://house-of-pizza.herokuapp.com/",
      bg: primary,
      text: secondary,
      heading: tertiary,
    },
    {
      name: "My Favourite Movie - To have your own movie list",
      about:
        "Here one can save their favourite movies and share with friends. Able to ask friends to give movie suggestions. ",
      why: "To have a movie list to give suggestions to friends and they can have some insight here",
      whatnext: ["To add more features like movie trailor, download link"],
      imgSrc: [movieHome],
      techStack: [
        reacticon,
        materialuiicon,
        nodeicon,
        expressjsicon,
        mongodbicon,
        netlifyicon,
      ],
      credentials: [],
      github: "https://github.com/Vaibhav4556/addMoviesapp",
      live: "https://astounding-bunny-b93960.netlify.app/",
      bg: tertiary,
      text: secondary,
      heading: primary,
    },
    {
      name: "Expense Tracker App",
      about:
        "This web app is used to track our expenses. It will helpfull for storing the transactions related to any expense and  cerdit we can update it at at time to time",
      why: "To keep tracking of our income & expenses is very usefull",
      whatnext: [
        "To add more features like advice regarding the best investment ",
      ],
      imgSrc: [trackexpense, expense1],
      techStack: [
        javascripticon,
        bootstrapicon,
        netlifyicon,
        nodeicon,
        expressjsicon,
        mongodbicon,
      ],
      credentials: [],
      github: "https://github.com/Vaibhav4556/track_expense-app",
      live: "https://expense-tracker-app83.herokuapp.com/login",
      bg: primary,
      text: secondary,
      heading: bg,
    },
  ];
  // Make sure that the bg of next div is the previous svg fill
  return (
    <div className="projects-wrapper">
      {/* With project list will traverse and create projects */}
      {projectList.map(
        (
          {
            name,
            about,
            why,
            whatnext,
            imgSrc,
            techStack,
            credentials,
            github,
            live,
            bg,
            text,
            heading,
          },
          index
        ) => (
          <div
            className="project-withsvg"
            key={index}
            style={{ backgroundColor: bg }}
          >
            <div className="container-sm project">
              {/* Project is divided into 2 parts here all the wordings will come */}
              <div className="project-content" style={{ color: heading }}>
                <h2 className="project-title">{name}</h2>

                {/* About project */}
                <div className="project-about">
                  {/* <h5>About project</h5> */}
                  <p className="project-info" style={{ color: text }}>
                    {about}
                  </p>
                  <p className="project-info" style={{ color: text }}>
                    {why}
                  </p>
                </div>

                {/* Future upgrades */}
                <div className="project-future">
                  <h5>Future Upgrades</h5>

                  <ul className="project-info" style={{ color: text }}>
                    {whatnext.map((e, index) => (
                      <li key={index}>{e}</li>
                    ))}
                  </ul>
                </div>

                {/* For displaying tech stack used in each project */}
                <div className="project-techStack">
                  {techStack.map((e, index) => (
                    <img key={index} src={e} alt="broken" />
                  ))}
                </div>

                {/* For displaying credentials for the site */}
                <div className="project-credentials">
                  {credentials.length > 0 ? <div>
                    <h4>Credentials</h4>
                    <p>Employee Id: 12345</p>
                    <p>Password :123456</p>
                  </div> : null}
                  {/* {credentials.map(({ email, password }, index) => (
                    <p>
                      {password === "" ? "Admin" : ""} : {email}{" "}
                      - {password}
                    </p>
                  ))} */}
                </div>

                {/* Button for source code and live link */}
                <div className="project-link-btn">
                  <Button
                    variant="outlined"
                    size="large"
                    style={{ borderColor: bgColor }}
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={live}
                      style={{ color: bgColor }}
                    >
                      Live
                    </a>
                  </Button>

                  <Button
                    variant="text"
                    size="large"
                    style={{ borderColor: bgColor }}
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={github}
                      style={{ color: bgColor }}
                    >
                      Github repo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project images will be displayed here */}
              <div className="project-img">
                {imgSrc.map((e, index) => (
                  <img
                    alt="broken"
                    className={"Layer-" + index + name}
                    src={e}
                    key={index}
                    style={{ width: "400px" }}
                  />
                ))}
              </div>
            </div>

            <svg
              className="for-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill={heading}
                fillOpacity="1"
                d="M0,224L34.3,202.7C68.6,181,137,139,206,144C274.3,149,343,203,411,208C480,213,549,171,617,176C685.7,181,754,235,823,250.7C891.4,267,960,245,1029,229.3C1097.1,213,1166,203,1234,213.3C1302.9,224,1371,256,1406,272L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
              ></path>
            </svg>
          </div>
        )
      )}
    </div>
  );
}

export default Projects;
