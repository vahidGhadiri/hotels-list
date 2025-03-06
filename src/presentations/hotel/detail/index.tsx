import { useGetHotelDetail } from "@adapters/hotel";
import { BottomSheet, Button, Icon, QueryStatus } from "@components";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { DetailHeader, Review } from "./components";

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, status } = useGetHotelDetail({ id });
  const [activeTab, setActiveTab] = useState("Overview");
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);
  const navigate = useNavigate();

  const onBottomSheetDismiss = () => {
    setIsBottomSheetOpen(false);
    navigate(-1);
  };

  const tabs = ["Overview", "Maps", "Preview"];

  return (
    <QueryStatus status={status}>
      <div className="relative w-full h-screen bg-gray-100">
        {/* Hotel Image */}
        <img
          className="w-full h-full object-cover"
          src={data?.image}
          alt={data?.name}
        />
        <DetailHeader />

        <BottomSheet
          onDismiss={onBottomSheetDismiss}
          isOpen={isBottomSheetOpen}
          snapPoints={({ maxHeight }) => [maxHeight * 0.8, maxHeight * 0.9]}
          defaultSnap={({ maxHeight }) => maxHeight * 0.6}
          footer={
            <Button
              className="w-full bg-orange-500 text-white font-bold "
              onClick={() => console.log("Book Now clicked")}
              label="Book Now"
            />
          }
        >
          <div>
            {/* Hotel Name and Price */}
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{data?.name}</h1>
              <div className="text-right">
                <span className="text-primary font-bold text-xl">
                  ${data?.price}
                </span>
                <span className="text-neutral text-sm">/night</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center mb-4">
              <Icon
                name="LocationPin"
                className="text-orange-500 w-4 h-4 mr-1"
              />
              <span className="text-gray-600 text-sm">
                {data?.location?.province}
              </span>
            </div>

            {/* Reviews */}
            <Review star={data?.stars} />
            {/* Tabs */}
            <div className="flex mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 px-4 text-sm font-medium ${
                    activeTab === tab
                      ? "text-primary border-b-2 border-orange-500"
                      : "text-neutral"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <p className="text-neutral mb-4 text-caption-2 text-start">
              {data?.description}
            </p>
          </div>
        </BottomSheet>
      </div>
    </QueryStatus>
  );
};

export default HotelDetail;
