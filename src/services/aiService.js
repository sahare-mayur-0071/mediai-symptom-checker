export const getAISuggestion = async (symptoms) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000); // 15 sec timeout

  try {
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symptoms }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    clearTimeout(timeout);
    return "⚠️ AI service is currently unavailable. Please try again later.";
  }
};
