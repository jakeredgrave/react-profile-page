import React from "react";

const WebPages = ({ webPages }) => {
  return (
    <div id="web-pages">
      <a className="web-page-link" href="{webPages[0]}">
        {webPages[0]}
      </a>
      <a className="web-page-link" href="http://">
        {webPages[1]}
      </a>
      <a className="web-page-link" href="http://">
        {webPages[2]}
      </a>
    </div>
  );
};

export default WebPages;
