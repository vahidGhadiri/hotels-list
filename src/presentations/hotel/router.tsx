import { Routes, Route } from "react-router-dom";
import HotelDetail from "./detail";
import HotelsList from "./list";

const HotelRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HotelsList />} />
      <Route path="/hotels/:id" element={<HotelDetail />} />
    </Routes>
  );
};

export default HotelRouter;
