import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.holidayshowfinder.com">
        Holiday Show Finder
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Suggestions() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Suggestions: "}
      <Link
        target="_blank"
        color="inherit"
        href="mailto:holidayshowfinder@gmail.com"
      >
        holidayshowfinder@gmail.com
      </Link>
    </Typography>
  );
}

export default function Footer() {
  return (
    <div>
      <Copyright />
      <Suggestions />
    </div>
  );
}
