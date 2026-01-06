import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { symptoms } = req.body;

    if (!symptoms) {
      return res.status(400).json({ error: "Symptoms missing" });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "API key not configured" });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a healthcare assistant. Do not diagnose. Give general advice only.",
        },
        {
          role: "user",
          content: symptoms,
        },
      ],
    });

    return res.status(200).json({
      result: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("AI ERROR:", error);
    return res.status(500).json({
      error: "AI failed",
      details: error.message,
    });
  }
}
