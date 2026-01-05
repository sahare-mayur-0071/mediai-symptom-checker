import React, { useState } from "react";
import Header from "./components/Header";
import SymptomForm from "./components/SymptomForm";
import ResultCard from "./components/ResultCard";
import { getAISuggestion } from "./services/aiService";

function App() {
  const [result, setResult] = useState("");

  const handleSubmit = async (symptoms) => {
    const response = await getAISuggestion(symptoms);
    setResult(response);
  };

  return (
    <>
      <Header />
      <SymptomForm onSubmit={handleSubmit} />
      {result && <ResultCard result={result} />}
    </>
  );
}

export default App;
