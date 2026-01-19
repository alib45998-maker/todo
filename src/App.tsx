import { useState } from "react";

export default function App() {
  const [tasks] = useState([
    { id: 1, task: "Complete Assignment", status: "Completed", deadline: "10/11/2023, 12:00:00 PM" },
    { id: 2, task: "Submit Project", status: "Completed", deadline: "10/11/2023, 5:22:00 PM" },
    { id: 3, task: "Practice DSA", status: "Ongoing", deadline: "10/11/2023, 7:00:00 PM" },
    { id: 4, task: "Fix the bug", status: "Pending", deadline: "10/11/2023, 8:30:00 PM" }
  ]);
  return (
    <div className="p-5 bg-gray-100 min-h-screen font-sans">
      <h1 className="text-4xl text-center mb-10 font-bold">Todo List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
        <section className="w-full h-full flex flex-col">
          <h2 className="text-2xl mb-5 font-semibold">Todo List</h2>
          <div className="w-full bg-white flex-1">
            <table className="w-full border-collapse h-full">
              <thead>
                <tr className="bg-blue-200">
                  <th className="border border-gray-300 p-3 text-left">Task</th>
                  <th className="border border-gray-300 p-3 text-left">Status</th>
                  <th className="border border-gray-300 p-3 text-left">Deadline</th>
                  <th className="border border-gray-300 p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id}>
                    <td className="border border-gray-300 p-3">{task.task}</td>
                    <td className="border border-gray-300 p-3">{task.status}</td>
                    <td className="border border-gray-300 p-3">{task.deadline}</td>
                    <td className="border border-gray-300 p-3"><button className="bg-blue-500 text-white px-4 py-1.5 rounded">Edit</button></td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </section>
        <form className="w-full h-full bg-white p-6 rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl mb-5 font-semibold">Add Task</h2>
            <label className="block mb-2 font-medium">Task</label>
            <input type="text" placeholder="Enter Task" className="w-full p-2.5 border border-gray-300 rounded text-sm mb-5" /><label className="block mb-2 font-medium">Status</label>
            <input type="text" placeholder="Enter Status" className="w-full p-2.5 border border-gray-300 rounded text-sm mb-5"/>
            <label className="block mb-2 font-medium">Deadline</label>
            <input type="datetime-local" className="w-full p-2.5 border border-gray-300 rounded text-sm mb-5"/>
          </div>
          <button className="bg-green-600 text-white px-6 py-3 rounded text-base font-medium mt-6">Add Task</button>
        </form>
      </div>
    </div>
  );
}
