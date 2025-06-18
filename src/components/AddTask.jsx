import { useState } from "react";
import { FaTasks, FaAlignLeft } from "react-icons/fa";

function AddTask({ setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description: description || "Sem descrição",
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Adicionar Nova Tarefa
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo Título */}
        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition">
          <FaTasks className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Título da tarefa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* Campo Descrição */}
        <div className="flex items-start border border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition">
          <FaAlignLeft className="text-gray-500 mr-2 mt-1" />
          <textarea
            placeholder="Descrição da tarefa (opcional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full outline-none resize-none text-gray-700"
          />
        </div>

        {/* Botão */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition shadow-md"
          >
            Adicionar Tarefa
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
