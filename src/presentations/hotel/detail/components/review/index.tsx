import { Icon } from "@components";
import { FC } from "react";

interface DetailReviewProps {
  star?: number;
}

const DetailReview: FC<DetailReviewProps> = ({ star }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <div className="flex -space-x-2 mr-2">
          <img
            src="/placeholder.svg?height=24&width=24"
            className="w-6 h-6 rounded-full border-2 border-white"
          />
          <img
            src="/placeholder.svg?height=24&width=24"
            className="w-6 h-6 rounded-full border-2 border-white"
          />
          <img
            src="/placeholder.svg?height=24&width=24"
            className="w-6 h-6 rounded-full border-2 border-white"
          />
          <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white text-xs">
            +2
          </div>
        </div>
        <span className="text-gray-600 text-caption-2">People Reviewed</span>
      </div>
      <div className="flex items-center">
        <Icon
          name="Fave"
          className="text-yellow-400 w-4 h-4 mr-1 fill-current"
        />
        <span className="text-gray-900 font-medium">{star || 0}</span>
        <span className="text-gray-500">/5</span>
      </div>
    </div>
  );
};

export default DetailReview;
