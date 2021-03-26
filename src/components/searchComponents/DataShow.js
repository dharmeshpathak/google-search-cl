import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./DataShow.css";
function DataShow(props) {
  return (
    <div style={{ borderBottom: "2px solid lightgrey" }}>
      <div key={props.displayLink}>
        <a
          style={{
            fontSize: "12px",
            padding: "5px",
            display: "flex",
            alignItems: "center",
          }}
          href={props.displayLink}
        >
          <img
            src={props.image}
            alt=""
            className="searchPage__resultImage"
            style={{
              objectFit: "contain",

              height: "20px",
              width: "20px",
              marginRight: "5px",
            }}
          />
          {props.displayLink} <ArrowDropDownIcon />
        </a>

        <h4>
          <a
            href={props.formattedUrl}
            className="link-text"
            dangerouslySetInnerHTML={{ __html: props.htmlTitle }}
          />
        </h4>
        <p
          className="paragraph"
          dangerouslySetInnerHTML={{ __html: props.htmlSnippet }}
          style={{ color: "#666" }}
        />
      </div>
    </div>
  );
}

export default DataShow;
