import OpenAI from "openai";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function generate() {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: 'Napisz przykładowy wiersz.' }],
            max_tokens: 50,
        });
        const generatedText = response.choices[0].message.content;
        console.log(generatedText);
    } catch (error) {
        console.error('Error:', error);
    }
}

generate();