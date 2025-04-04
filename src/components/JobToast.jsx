import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const JobToast = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/careers") return; // Stop showing on careers page

    const showJobToast = () => {
      toast.info(
        <div style={{ textAlign: "center", fontSize: "16px" }}>
          💼 A new job has been posted!{" "}
          <span
            style={{
              fontWeight: "bold",

              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => navigate("/careers")} // Only text clickable
          >
            Click to view.
          </span>
        </div>,
        {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        }
      );
    };

    const interval = setInterval(showJobToast, 120000); // Every 2 minutes

    return () => clearInterval(interval); // Cleanup on unmount
  }, [location.pathname, navigate]);

  return null; // No JSX needed
};

export default JobToast;
