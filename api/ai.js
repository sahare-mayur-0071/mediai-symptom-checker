import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { symptoms } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a health assistant. Do not give medical diagnosis. Give general guidance only.",
        },
        {
          role: "user",
          content: symptoms,
        },
      ],
    });

    res.status(200).json({
      result: response.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ error: "AI error" });
  }
}
