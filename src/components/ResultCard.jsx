import React from "react";

const ResultCard = ({ result }) => (
  <div style={{ margin: "20px", padding: "15px", border: "1px solid gray" }}>
    <h3>AI Health Advice</h3>
    <p>{result}</p>
    <p style={{ color: "red" }}>⚠️ This is not a medical diagnosis</p>
  </div>
);

export default ResultCard;
