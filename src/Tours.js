import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, myDeleteFunction }) => {
  return (
    <section>
      <div className="title">
        <h2>our Tours No:{tours.length}</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((item) => {
          return (
            <Tour key={item.id} {...item} myDeleteFunction={myDeleteFunction} />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
