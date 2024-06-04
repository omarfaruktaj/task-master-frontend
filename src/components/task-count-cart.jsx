import { useState, useEffect } from "react";
import axios from "axios";

export default function TasksOverview() {
  const [taskCounts, setTaskCounts] = useState({
    totalTasks: 0,
    todoTasks: 0,
    inProgressTasks: 0,
    doneTasks: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/tasks/count",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setTaskCounts(response.data.data);
      } catch (error) {
        console.error("Error fetching task counts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <h2 className="text-3xl font-bold my-4">Tasks Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-base-200 rounded-md p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">
            Total Tasks
          </h3>
          <p className="text-3xl font-bold text-white">
            {taskCounts.totalTasks}
          </p>
        </div>
        <div className="bg-base-200 rounded-md p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">To Do</h3>
          <p className="text-3xl font-bold text-white">
            {taskCounts.todoTasks}
          </p>
        </div>
        <div className="bg-base-200 rounded-md p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">
            In Progress
          </h3>
          <p className="text-3xl font-bold text-white">
            {taskCounts.inProgressTasks}
          </p>
        </div>
        <div className="bg-base-200 rounded-md p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Done</h3>
          <p className="text-3xl font-bold text-white">
            {taskCounts.doneTasks}
          </p>
        </div>
      </div>
    </div>
  );
}
