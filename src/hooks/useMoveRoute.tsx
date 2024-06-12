import { useNavigate } from "react-router-dom";

// Define a custom hook for navigation
const useMoveRoute = () => {
  const navigate = useNavigate();

  const moveRoute = (route: string) => {
    navigate(route);
  };

  return moveRoute;
};

export default useMoveRoute;
