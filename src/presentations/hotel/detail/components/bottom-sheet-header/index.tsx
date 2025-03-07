import { Icon } from "@components";
import type { Location } from "@use-cases/hotel";
import type { FC } from "react";

interface BottomSheetHeaderProps {
  location?: Pick<Location, "province" | "city">;
  price?: number;
  name?: string;
}

const BottomSheetHeader: FC<BottomSheetHeaderProps> = ({
  location,
  price,
  name,
}) => (
  <>
    <div className="flex justify-between items-start mb-2">
      <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
      <div className="text-right">
        <span className="text-primary font-bold text-xl">${price}</span>
        <span className="text-neutral text-sm">/night</span>
      </div>
    </div>
    <div className="flex items-center mb-4">
      <Icon name="LocationPin" className="text-orange-500 w-4 h-4 mr-1" />
      <span className="text-gray-600 text-sm">{location?.province}</span>
    </div>
  </>
);

export default BottomSheetHeader;
