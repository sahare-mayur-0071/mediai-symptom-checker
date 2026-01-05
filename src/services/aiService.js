export const getAISuggestion = async (symptoms) => {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ symptoms }),
  });

  const data = await response.json();
  return data.result;
};
