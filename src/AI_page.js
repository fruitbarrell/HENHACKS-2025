async function getOpenAIResponse(prompt) {
    const apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your actual API key
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",  // Use "gpt-4" for GPT-4
            messages: [{ role: "user", content: prompt }],
            max_tokens: 100
        })
    });

    const data = await response.json();
    return data.choices[0]?.message?.content || "No response from OpenAI.";
}