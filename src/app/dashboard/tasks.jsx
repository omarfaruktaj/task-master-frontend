import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const statusOptions = ["To Do", "In Progress", "Done"];

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getTasks = async () => {
      let url = "http://localhost:5000/api/tasks";
      if (searchTerm) {
        url += `?search=${searchTerm}`;
      }
      if (statusFilter) {
        url += `${searchTerm ? "&" : "?"}status=${statusFilter}`;
      }
      const data = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(data.data.data.tasks);
    };
    getTasks();
  }, [searchTerm, statusFilter]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const result = await MySwal.fire({
        title: "Are you sure?",
        text: "Do you want to Delete this task?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete!",
        cancelButtonText: "No, cancel!",
      });
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(tasks.filter((task) => task._id !== id));

        toast.success("Task deleted.");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="p-8 text-gray-200">
      <div className=" mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-200">My tasks</h2>
            <p className=" text-sm text-gray-400 py-2">My All Tasks</p>
          </div>
          <div>
            <Link to="create" className="btn btn-secondary">
              Add Task
            </Link>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-700 my-4"></div>
      </div>
      <div className="flex justify-start gap-5 mb-4">
        <div>
          <p className="my-1 font-bold">Search</p>
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered"
          />
        </div>
        <div>
          <p className="my-1 font-bold">Filter</p>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input input-bordered"
          >
            <option value="">All</option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tasks.map(({ _id, title, description, status }) => (
              <tr key={title} className="  rounded-full mb-4">
                <td>{title}</td>
                <td>{description}</td>
                <td className="">{status}</td>
                <td>
                  <div className="flex items-center justify-center gap-2">
                    <Link to={`update/${_id}`} className="btn btn-primary">
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(_id)}
                      className="btn btn-error"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
}
