import React, { useState } from "react";

const SymptomForm = ({ onSubmit }) => {
  const [symptoms, setSymptoms] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!symptoms) return;
    onSubmit(symptoms);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", textAlign: "center" }}>
      <textarea
        rows="5"
        placeholder="Describe your symptoms..."
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        style={{ width: "80%", padding: "10px" }}
      />
      <br /><br />
      <button>Check Symptoms</button>
    </form>
  );
};

export default SymptomForm;
