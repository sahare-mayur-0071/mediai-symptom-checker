import React, { useState } from "react";
import Header from "./components/Header";
import SymptomForm from "./components/SymptomForm";
import ResultCard from "./components/ResultCard";
import { getAISuggestion } from "./services/aiService";

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (symptoms) => {
    setLoading(true);
    const response = await getAISuggestion(symptoms);
    setResult(response);
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <SymptomForm onSubmit={handleSubmit} />
      {loading && <p style={{ textAlign: "center" }}>Analyzing symptoms...</p>}
      {result && <ResultCard result={result} />}
    </div>
  );
}

export default App;
