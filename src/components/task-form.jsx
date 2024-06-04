import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./loading";

// eslint-disable-next-line react/prop-types
export default function TaskForm({ taskId, onSubmit }) {
  const [isLoading, setIsLoding] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "To Do",
  });

  const statusOptions = ["To Do", "In Progress", "Done"];

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (taskId) {
      setIsLoding(true);
      axios
        .get(`https://task-master-vert-omega.vercel.app/api/tasks/${taskId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setFormData({
            title: response.data.data.task.title,
            description: response.data.data.task.description,
            status: response.data.data.task.status,
          });
          setIsLoding(false);
        });
      setIsLoding(false);
    }
  }, [taskId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (isLoading) return <Loading />;
  return (
    <div>
      <h1 className="p-4 text-3xl font-bold">
        {taskId ? "Edit Task" : "Create A New Task"}
      </h1>

      <form onSubmit={handleSubmit} className="p-4 rounded shadow-md max-w-lg">
        <div className="form-control mb-4">
          <label className="label" htmlFor="title">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label" htmlFor="description">
            <span className="label-text">Description</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        <div className="form-control mb-4">
          <label className="label" htmlFor="status">
            <span className="label-text">Status</span>
          </label>
          <select
            name="status"
            id="status"
            value={formData.status}
            onChange={handleChange}
            className="select select-ghost w-full max-w-full"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            {taskId ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}
