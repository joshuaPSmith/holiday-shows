import React from "react";
import { Helmet } from "react-helmet";
import fbLogo from "./assets/img/fb-pic.jpg";

export default function Header() {
  const title = "Holiday Show Finder!";
  const description = `Use our app to find holiday episodes of The Office, Friends, 
  Psych, Community, and Parks and recreation! This app will make it easy to get in the holiday season 
  by showing you the right episodes for the holiday!`;
  const url = "https://www.holidayshowfinder.com";
  return (
    <div>
      <Helmet>
        <title>
          Holiday Show Finder - The easiest way to find holiday episodes of your
          favorite shows!
        </title>
        <meta name="description" content={description} />
        <meta name="og:url" content={url} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={fbLogo} />
        <meta name="og:type" content="website" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fbLogo} />
      </Helmet>
    </div>
  );
}
