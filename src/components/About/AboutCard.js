import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}>
      <Card.Body>
        <div data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi! Want to know more about me? You are in the right place! <br />
            I'm Yumo, an AI Engineer and a Data Scientist. Navigating the exciting world of Generative AI and Data Science. From Shanghai to NYC to Singapore, I weave data tales, sculpt intricate data architectures, and sprinkle a touch of AI whimsy.   <br />
            <br />
            Here are some fun facts about me:
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> I enjoy cherries but dislike anything with a cherry flavor.
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> I dislike carrots but have an appreciation for all things with a carrot flavor.
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> I really struggle to think of a fun fact when people ask for one.
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
