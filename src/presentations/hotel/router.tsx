import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { SpinnerLoading } from "@components";

const HotelsList = lazy(() => import("./list"));
const HotelDetail = lazy(() => import("./detail"));

const HotelRouter = () => {
  return (
    <Suspense fallback={<SpinnerLoading mode="overlay" size="large" />}>
      <Routes>
        <Route path="/" element={<HotelsList />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
      </Routes>
    </Suspense>
  );
};

export default HotelRouter;
