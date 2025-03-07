import { useNavigate, useParams } from "react-router-dom";
import { useGetHotelDetail, useGetHotelsList } from "@adapters/hotel";
import { JSX, useMemo, useState } from "react";

import { BottomSheet, Map, QueryStatus, Tabs } from "@components";

const DEFAULT_CENTER_LOCATION = [35.6892, 51.389];
const DETAIL_TABS = ["overview", "maps", "comments"];

import {
  BottomSheetFooter,
  BottomSheetHeader,
  DetailHeader,
  Overview,
  Review,
  Rating,
} from "./components";

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, status } = useGetHotelDetail({ id });
  const { data: hotelsList } = useGetHotelsList({});

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);
  const [activeTab, setActiveTab] =
    useState<(typeof DETAIL_TABS)[number]>("overview");

  const hotelsLocationList = useMemo(() => {
    return (
      hotelsList?.map(({ location, name, image }) => ({
        position: [location.lat, location.long] as [number, number],
        popup: { title: name, image: image },
      })) ?? []
    );
  }, [hotelsList]);

  const onBottomSheetDismiss = () => {
    setIsBottomSheetOpen(false);
    navigate(-1);
  };

  const tabMapObject: { [key in (typeof DETAIL_TABS)[number]]: JSX.Element } = {
    overview: <Overview description={data?.description} />,
    comments: <Review reviews={data?.reviews} />,
    maps: (
      <Map
        markers={hotelsLocationList}
        center={[
          data?.location.lat ?? DEFAULT_CENTER_LOCATION[0],
          data?.location.long ?? DEFAULT_CENTER_LOCATION[1],
        ]}
      />
    ),
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
            isExpandOnContentDrag={false}
            onDismiss={onBottomSheetDismiss}
            isOpen={isBottomSheetOpen}
            footer={<BottomSheetFooter onCancelClick={() => navigate(-1)} />}
          >
            <BottomSheetHeader
              location={data?.location}
              price={data?.price}
              name={data?.name}
            />
            <Rating reviews={data?.reviews} />
            <Tabs
              onTabChange={setActiveTab}
              defaultTab={activeTab}
              tabs={DETAIL_TABS}
              className="mt-6"
            />
            {tabMapObject[activeTab]}
          </BottomSheet>
        </div>
      </>
    </QueryStatus>
  );
};

export default HotelDetail;
