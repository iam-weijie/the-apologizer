"use client";

import { useState } from "react";

export default function Apologizer() {
  const [input, setInput] = useState("");
  const [apology, setApology] = useState("");

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

  const generateApology = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const randomTemplate =
      templates[Math.floor(Math.random() * templates.length)];
    setApology(randomTemplate(input.trim()));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 font-mono">
      <h1 className="text-4xl mb-6">🙏 The Apologizer</h1>
      <form
        onSubmit={generateApology}
        className="flex flex-col items-center w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Type anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded text-black"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded transition"
        >
          Apologize
        </button>
      </form>

      {apology && (
        <div className="mt-6 bg-gray-800 p-4 rounded max-w-md text-center">
          <p className="italic">"{apology}"</p>
        </div>
      )}
    </div>
  );
}
