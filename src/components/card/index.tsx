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
      className="w-full max-w-xs mx-auto rounded-xl overflow-hidden bg-white shadow-elevation-2"
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
          <div className="flex justify-between items-start text-neutral text-body-3">
            <p>${price}</p>
            <p>{name}</p>
          </div>

          <div className="flex items-center justify-end  text-neutral">
            <span className="text-caption-3">
              {location.city}, {location.province}
            </span>
            <Icon
              name="LocationPin"
              className="mr-1"
              mode="stroked"
              size={14}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
