import { useParams } from "react-router-dom";

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();
  return <div>{id}</div>;
};

export default HotelDetail;
