import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Background from "./Background";
import TodoCard from "./TodoCard";
import InputCard from "./InputCard";
import { getTodos, saveTodos } from "../utils/storage";

const NewTab = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("low");

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const updateList = (list) => {
    setTodos(list);
    saveTodos(list);
  };

  const addTodo = () => {
    if (!text.trim()) return;
    const item = { id: Date.now(), text, priority, done: false };
    updateList([item, ...todos]);
    setText("");
    setPriority("low");
  };

  const deleteTodo = (id) => updateList(todos.filter((t) => t.id !== id));
  const toggleDone = (id) =>
    updateList(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <div className="relative w-full h-screen">
      {/* Centered Google Search Shortcut with Gemini-style gradient border */}
      <div className="absolute top-4 left-4 sm:transform -translate-x-0 sm:left-1/2 sm:-translate-x-1/2 z-10">
        <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 p-[2px] rounded-full inline-block">
          <button
            onClick={() => {
              // open Chrome's built-in new-tab and close this one
              chrome.tabs.create({ url: "chrome://new-tab-page" });
              chrome.tabs.getCurrent(
                (tab) => tab && chrome.tabs.remove(tab.id)
              );
            }}
            className="bg-white rounded-3xl px-6 py-3 text-sm  text-neutral-700 hover:bg-neutral-100"
          >
            <h1 className="font-bold">Google Search</h1>
          </button>
        </div>
      </div>

      <Background />

      {/* Input Card (top-right) */}
      <InputCard>
        <input
          type="text"
          placeholder="What’s next?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-2 rounded-lg border border-neutral-200 focus:outline-none"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 rounded-lg border border-neutral-200 focus:outline-none"
        >
          {["low", "medium", "high"].map((p) => (
            <option key={p} value={p}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </option>
          ))}
        </select>
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-900"
        >
          Add
        </button>
      </InputCard>

      {/* Todo Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-28 left-1/2 transform -translate-x-1/2 w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
      >
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            data={todo}
            onDelete={() => deleteTodo(todo.id)}
            onToggle={() => toggleDone(todo.id)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default NewTab;
