import React from "react";
import "../components/css/page.css";
import BackgroundImage from "../images/students.png";

function Home(props) {
  return (
    <div
      className="fc home"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        flexDirection: "column"
      }}
    >
      <div className="heading">
        <h1 className="font-formatted-2">TEST HEADLINE</h1>
      </div>
      <div className="desc">
        <p className="font-formatted-1">
          Many students find this task easier to embark upon through joining
          clubs and organizations that fit their individual interests, needs,
          and goals. A specific club or organization may satisfy several aspects
          of interest for a student, such as networking to find to learn more
          about an academic related subject and the opportunity to socialize and
          meet new people
        </p>
      </div>
    </div>
  );
}

export default Home;
