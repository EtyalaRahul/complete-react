import { useState } from "react";
import { Chatbot } from 'supersimpledev';

function ChatInput({ messages, setMessages }) {
  const [inputText, setInputText] = useState('');

  function sendMessage() {
    if (!inputText.trim()) return;

    const updatedMessages = [
      ...messages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID()
      }
    ];

    const response = Chatbot.getResponse(inputText);

    setMessages([
      ...updatedMessages,
      {
        message: response,
        sender: "bot",
        id: crypto.randomUUID()
      }
    ]);

    setInputText('');
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Send a message to Chatbot"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
} 

export default ChatInput;