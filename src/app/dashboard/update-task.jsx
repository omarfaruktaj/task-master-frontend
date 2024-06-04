import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import TaskForm from "../../components/task-form";

const MySwal = withReactContent(Swal);

export default function UpdateTask() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleSubmit = async (data) => {
    try {
      const result = await MySwal.fire({
        title: "Are you sure?",
        text: "Do you want to Update this task?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Update!",
        cancelButtonText: "No, cancel!",
      });
      if (result.isConfirmed) {
        const token = localStorage.getItem("token");
        await axios.patch(
          `https://task-master-vert-omega.vercel.app/api/tasks/${id}`,
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
        toast.success("Task successfully updated.");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <div>
      <TaskForm taskId={id} onSubmit={handleSubmit} />
    </div>
  );
}
