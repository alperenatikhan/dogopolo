import React from "react";
import FadeIn from "react-fade-in";
import "./styles.css";

function DogoCard(props) {
  let { id, title, photo, location, link } = props.item;

  return (
    <>
      <div
        className="dogocard"
        key={id}
        style={{
          minWidth: "180px",
          maxWidth: "320px",
          margin: "1rem auto",
          border: "1px solid lightgray",
          borderRadius: "0.5rem",
          padding: "0 1.5rem 1.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <FadeIn>
          <h4
            style={{
              width: "80%",
              fontFamily: "Playfair Display"
            }}
          >
            {title}
          </h4>
          <img
            alt={title}
            src={photo}
            style={{ width: "95%", height: "10rem", margin: "auto" }}
          />
          <p> {location} </p>
          <a href={link} target="_blank">
            <button> Visit Page </button>
          </a>
        </FadeIn>
      </div>
    </>
  );
}

export default DogoCard;
