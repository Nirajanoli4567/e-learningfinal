import { useNavigate } from "react-router";

export const Contact = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="p-xl m-xl">
      Contact <button onClick={goBack}>Back</button>
    </div>
  );
};
