const axios = require('axios');

module.exports = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo-1106', // Adjusted model to match the previous example
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 100,
        temperature: 0.5,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
