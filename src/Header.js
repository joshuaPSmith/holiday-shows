import React from "react";
import { Helmet } from "react-helmet";

export default function Header() {
  return (
    <div>
      <Helmet>
        <title>
          Holiday Show Finder - The easiest way to find holiday episodes of your
          favorite shows!
        </title>
        <meta
          name="description"
          content="Use our app to find holiday episodes of The Office, Friends, 
Psych, Community, and Parks and recreation! This app will make it easy to get in the holiday season 
by showing you the right episodes for the holiday!"
        />
      </Helmet>
    </div>
  );
}
