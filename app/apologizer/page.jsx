"use client";

import { useState } from "react";

export default function ApologizerChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const templates = [
    (txt) =>
      `I am deeply sorry for my actions. I never intended harm. ${capitalize(
        txt
      )} deserves better.`,
    (txt) =>
      `My sincerest apologies. My comments about ${txt} were reckless and inexcusable.`,
    (txt) =>
      `I would like to apologize to ${txt} and their supporters. I have learned from my mistakes.`,
    (txt) =>
      `To everyone affected by my statement about ${txt}, I am truly sorry.`,
    (txt) =>
      `I take full responsibility for what I said about ${txt}. I will do better.`,
    (txt) =>
      `I deeply regret my poor choice of words regarding ${txt}. It was unacceptable.`,
  ];

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    const randomTemplate =
      templates[Math.floor(Math.random() * templates.length)];
    const apologyMsg = { text: randomTemplate(input.trim()), sender: "bot" };

    setInput("");

    // Delay for bot "thinking"
    setTimeout(() => {
      setMessages((prev) => [...prev, apologyMsg]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col font-sans">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 text-center font-bold text-lg">
        🙏 The Apologizer
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[75%] p-3 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-700 text-white self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={sendMessage}
        className="p-3 bg-gray-800 flex gap-2 border-t border-gray-700"
      >
        <input
          type="text"
          placeholder="Type anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 rounded bg-gray-700 text-white outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}
