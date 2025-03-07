import { useNavigate, useParams } from "react-router-dom";
import { useGetHotelDetail } from "@adapters/hotel";
import { JSX, useState } from "react";

import { BottomSheet, QueryStatus, Tabs } from "@components";
const tabs = ["overview", "maps", "comments"];

import {
  BottomSheetFooter,
  BottomSheetHeader,
  DetailHeader,
  Overview,
  Review,
  Rate,
} from "./components";

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, status } = useGetHotelDetail({ id });

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("overview");
  const navigate = useNavigate();

  const onBottomSheetDismiss = () => {
    setIsBottomSheetOpen(false);
    navigate(-1);
  };

  const tabMapObject: { [key in (typeof tabs)[number]]: JSX.Element } = {
    overview: <Overview description={data?.description} />,
    comments: <Review reviews={data?.reviews} />,
    maps: <div>"نقشه هتل"</div>,
  };
  return (
    <QueryStatus status={status}>
      <>
        <DetailHeader />
        <div className="relative w-full h-screen">
          <img
            className="w-full h-full object-cover"
            src={data?.image}
            alt={data?.name}
          />

          <BottomSheet
            snapPoints={({ maxHeight }) => [maxHeight * 0.8, maxHeight * 0.9]}
            defaultSnap={({ maxHeight }) => maxHeight * 0.6}
            onDismiss={onBottomSheetDismiss}
            isOpen={isBottomSheetOpen}
            footer={<BottomSheetFooter onCancelClick={() => navigate(-1)} />}
          >
            <BottomSheetHeader
              location={data?.location}
              price={data?.price}
              name={data?.name}
            />
            {/* <Rate star={data?.stars} reviewedLength={data?.reviews?.length} avatarSrc={data?.reviews.}/> */}

            <Rate reviews={data?.reviews} star={data?.stars} />
            <Tabs
              className="mt-6"
              onTabChange={setActiveTab}
              defaultTab={activeTab}
              tabs={tabs}
            />
            {tabMapObject[activeTab]}
          </BottomSheet>
        </div>
      </>
    </QueryStatus>
  );
};

export default HotelDetail;
