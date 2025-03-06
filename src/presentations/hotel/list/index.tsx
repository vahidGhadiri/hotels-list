import { useState } from "react";

import { Card, Input, QueryStatus } from "@components";
import { useGetHotelsList } from "@adapters/hotel";
import { useDebounce } from "@hooks";
import { useNavigate } from "react-router-dom";

const HotelsList = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const navigate = useNavigate();

  const { data, status } = useGetHotelsList({ name_like: debouncedSearch });

  return (
    <div className="max-w-screen-sm mx-auto py-8">
      <Input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Destination"
        startIcon={{ name: "Search" }}
        className="mx-4"
        value={search}
      />
      <QueryStatus status={status}>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 my-8 px-5">
          {data?.map(({ image, location, name, price, id }) => (
            <div key={id}>
              <Card
                onClick={() => navigate(`/hotels/${id}`)}
                location={location}
                image={image}
                price={price}
                name={name}
              />
            </div>
          ))}
        </div>
      </QueryStatus>
    </div>
  );
};

export default HotelsList;
