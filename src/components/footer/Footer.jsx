import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
      <footer className="footer">
        <ContentWrapper>
          <ul className="menuItems">
            <li className="menuItem">Terms Of Use</li>
            <li className="menuItem">Privacy-Policy</li>
            <li className="menuItem">About</li>
            <li className="menuItem">Blog</li>
            <li className="menuItem">FAQ</li>
          </ul>
          <div className="infoText">
            A weekly/monthly movie and TV show rating app compiles user reviews
            and critical feedback to curate top content. Users rate shows,
            forming collective rankings. Advanced algorithms consider user
            preferences, critics' reviews, and engagement metrics to calculate
            comprehensive ratings. Personalized recommendations align with
            individual viewing habits, suggesting content in concise lists. It
            highlights trending, timely content gauged through user interactions
            and streaming data. The app provides thematic content suggestions,
            matching seasonal or event-based themes. This dynamic platform
            offers tailored entertainment, featuring top-rated, trending, and
            themed content, serving as an essential guide for discovering the
            best shows and movies within specific timeframes.
          </div>
          <div className="socialIcons">
            <span className="icon">
              <FaFacebookF />
            </span>
            <span className="icon">
              <FaInstagram />
            </span>
            <span className="icon">
              <FaTwitter />
            </span>
            <span className="icon">
              <FaLinkedin />
            </span>
          </div>
        </ContentWrapper>
      </footer>
    );
};

export default Footer;
