import React from "react";
import ReactDOM from "react-dom/client";

/*
 PARCEL'S job
 ---------------------
 -HMR : Hot Module Reloading: parcel do the job
 -File Watching algorithm - Written in C++ 
 -Bundling 
 -Minify
 -Cleaning our code 
 -Taking care of all the dev't and production differences 
 -Image Optimazation
 -Caching while dev't
 -Compression
 -Super Fast build algorithm
 -Compatable with older version of browser 
 -HTTPS on dev (npx parcel index.html --https)
 -port Number
 -Consistent Hashing Algorithm 
 -Zero Config.

*/

const heading = React.createElement(
    "h1",
    {},
    "Hello Everyone, from React Community"
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);