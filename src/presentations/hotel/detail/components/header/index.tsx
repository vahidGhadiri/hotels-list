import { Icon } from "@components";
import { useNavigate } from "react-router-dom";

const DetailHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-4 w-full px-4 flex justify-between z-[100]">
      <span
        className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
        onClick={() => navigate(-1)}
      >
        <Icon name="CheveronLeft" />
      </span>
      <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
        <Icon name="Fave" />
      </span>
    </div>
  );
};

export default DetailHeader;
