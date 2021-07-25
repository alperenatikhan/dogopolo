import React, { useState } from "react";
import dogos from "./db1.json";
import DogoCard from "./DogoCard.js";
import DogoLogo from "./good_doggy.svg";
import FadeIn from "react-fade-in";
import "./styles.css";

export default function App() {
  let upToTen = [];
  for (let num = 1; num < 10; num++) {
    upToTen.push(num);
  }

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            color: "gold",
            fontSize: "2rem",
            margin: "2vh auto -0.5rem auto",
            fontFamily: "BioRhyme, serif",
            textShadow: "2px 2px 2px lightgray"
          }}
        >
          Dogs of Poland
        </h1>
        <FadeIn>
          {" "}
          <h2 style={{ width: "50vw", color: "dodgerblue", fontWeight: "400" }}>
            {" "}
            Przygarnij psa. Tak rodzą się przyjaźnie.{" "}
          </h2>
        </FadeIn>
        <img
          alt="site hero"
          src={DogoLogo}
          style={{
            height: "25vh"
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <p>
          {" "}
          <span>({Math.floor(5 * (pageNumber - 1)) + 1}</span>-
          <span>{Math.floor(5 * pageNumber)})</span> of{" "}
          <span> {dogos.length} </span>
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          {upToTen.map((num) => (
            <button
              key={num}
              value={num}
              onClick={(el) => setPageNumber(el.target.value)}
            >
              {" "}
              {num}{" "}
            </button>
          ))}
        </div>
      </div>
      <div
        className="dogogrid"
        style={{
          width: "95vw",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          placeItems: "center"
        }}
      >
        {dogos
          .slice(Math.floor(5 * (pageNumber - 1)), Math.floor(5 * pageNumber))
          .map((item) => (
            <DogoCard item={item} />
          ))}
      </div>
    </section>
  );
}
