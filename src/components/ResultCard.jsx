import React from "react";

const ResultCard = ({ result }) => {
  return (
    <div style={{ margin: "20px", padding: "15px", border: "1px solid #ccc" }}>
      <h3>AI Health Insight</h3>
      <p>{result}</p>
      <p style={{ color: "red" }}>
        ⚠️ This is not a medical diagnosis. Please consult a doctor.
      </p>
    </div>
  );
};

export default ResultCard;
