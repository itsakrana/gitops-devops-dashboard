import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api/status")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="container">
      <h1>🚀 DevOps Dashboard</h1>

      <div className="card">
        <h2>Status</h2>
        <p>{data.status}</p>
      </div>

      <div className="card">
        <h2>Time</h2>
        <p>{data.time}</p>
      </div>
    </div>
  );
}

export default App;