import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const myData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setTours(data);
    setLoading(false);
  };

  const myDeleteFunction = (id) => {
    const myDelete = tours.filter((item) => item.id !== id);
    setTours(myDelete);
  };

  useEffect(() => {
    myData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => myData()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} myDeleteFunction={myDeleteFunction} />
    </main>
  );
}

export default App;
