import {
  GoogleGenAI,
  Type,
} from '@google/genai';

export async function is_not_NSFW(title, content) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const config = {
    responseMimeType: 'application/json',
    responseSchema: {
      type: Type.OBJECT,
      required: ["V"],
      properties: {
        V: {
          type: Type.BOOLEAN,
        },
      },
    },
  };
  const model = 'gemini-2.0-flash-lite';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `you are a program which filter nsfw content. response with true if the content is safe content and false if it is not
          
          Title:
          ${title}
          
          Content:
          ${content}
          `,
        },
      ],
    },
  ];

  let response = await ai.models.generateContent({
    model,
    config,
    contents,
  });
  console.log(response.text);
  response = JSON.parse(response.text);
  return response["V"]
}
