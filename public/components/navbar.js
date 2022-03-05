import React, { useState } from "react";
import "../components/css/nav.css";
import { motion } from "framer-motion";
import { FaStream } from "react-icons/fa";
import clubsLogo from "../images/clubs.png";

function NavComponent({ props }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const textAnimate = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    show: {
      width: null,
      padding: null,
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  };
  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "20%" : "5%",
          boxShadow: isOpen
            ? "100px 0px 1px 100vw rgba(212, 210, 210, 0.39)"
            : "none",
          transition: "in-out 0.5"
        }}
        className="sidebar"
      >
        <div className="gc">
          <div className="fc">
            <div className="bars fc nav-pad">
              <FaStream
                onClick={toggle}
                style={{
                  color: "grey",
                  height: "2rem",
                  width: "3rem",
                  borderRadius: "0px"
                }}
              />
            </div>
            <div className="fc fc-50">
              <span className="vertical font-formatted-1 fs-h pos-fixed">
                <img src={clubsLogo} width="120px" />
              </span>
            </div>
          </div>
          {isOpen && (
            <div class="fc fc-center fvc">
              <motion.ul
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={textAnimate}
                style={{ listStyle: "none" }}
                className="font-formatted-2 fs-h nav-pad"
              >
                <li>About</li>
                <li>Clubs</li>
                <li></li>
              </motion.ul>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default NavComponent;
