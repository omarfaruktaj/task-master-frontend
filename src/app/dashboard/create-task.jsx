import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import TaskForm from "../../components/task-form";

const MySwal = withReactContent(Swal);

export default function CreateTask() {
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    const token = localStorage.getItem("token");
    try {
      console.log(data);

      const result = await MySwal.fire({
        title: "Are you sure?",
        text: "Do you want to crate a new task?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Create!",
        cancelButtonText: "No, cancel!",
      });

      if (result.isConfirmed) {
        await axios.post(
          "https://task-master-vert-omega.vercel.app/api/tasks",
          {
            ...data,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        navigate("/dashboard/tasks");
        toast.success("task successfully created.");
      }

      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <div>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
}
