import React, { useState } from "react";
import "./Notes.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! Ask me anything.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    // Simulate bot reply (Replace this with actual API call)
    setTimeout(() => {
      const botReply = { text: `You said: ${input}`, sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
    }, 500);

    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-box-wrapper">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-box ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
};

export default Chatbot;
