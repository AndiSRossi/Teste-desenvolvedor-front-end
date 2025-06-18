import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import AddTask from "./AddTask";

function AddTaskToggle({ setTasks }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setShowForm(!showForm)}
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition font-semibold"
      >
        <FaPlusCircle />
        {showForm ? "Fechar formulário" : "Adicionar tarefa"}
      </button>

      {showForm && (
        <div className="mt-6">
          <AddTask setTasks={setTasks} />
        </div>
      )}
    </div>
  );
}

export default AddTaskToggle;
