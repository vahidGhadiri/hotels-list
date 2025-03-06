import type { FC } from "react";
import type { Location } from "@use-cases/hotel";

import Icon from "../icon";

interface CardProps {
  location: Location;
  price: number;
  image: string;
  name: string;
  onClick?: VoidFunction;
}

const Card: FC<CardProps> = ({ location, price, image, name, onClick }) => {
  return (
    <div
      className="w-full max-w-xs mx-auto rounded-s overflow-hidden bg-white shadow-elevation-1"
      onClick={onClick}
    >
      <div className="relative">
        <div className="relative">
          <img
            className="w-full h-40 object-cover"
            src={image || "/placeholder.svg"}
            alt={name}
          />
          <button className="absolute top-3 right-3 w-6 h-6 bg-white rounded-l flex items-center justify-center shadow-elevation-1">
            <Icon name="Fave" size={16} />
          </button>
        </div>

        <div className="p-3">
          <div className="flex justify-between items-center text-neutral text-body-3">
            <p className="truncate">{name}</p>
            <p>${price}</p>
          </div>

          <div className="flex items-center justify-start  text-neutral">
            <Icon
              name="LocationPin"
              className="mr-1"
              color="primary"
              mode="filled"
              size={12}
            />
            <div className="text-caption-3">
              {location.city}, {location.province}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
