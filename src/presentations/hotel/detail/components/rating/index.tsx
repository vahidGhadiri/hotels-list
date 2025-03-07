import type { FC } from "react";

import { UserReview } from "@use-cases/hotel";
import { Icon } from "@components";

interface DetailRateProps {
  reviews?: UserReview[];
  maxAvatars?: number;
}

const Rating: FC<DetailRateProps> = ({ reviews = [], maxAvatars = 3 }) => {
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0.0";

  const reviewedLength = reviews.length;

  const visibleAvatars = Math.min(reviewedLength, maxAvatars);
  const remainingCount =
    reviewedLength > maxAvatars ? reviewedLength - maxAvatars : 0;

  return (
    <div className="flex items-center justify-between pb-4 border-b border-gray">
      <div className="flex items-center">
        <div className="flex -space-x-2 mr-2">
          {reviews.slice(0, visibleAvatars).map((review, index) => (
            <img
              key={index}
              src={review.user.avatar || "/placeholder.svg?height=24&width=24"}
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
          ))}
          {remainingCount > 0 && (
            <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white text-xs">
              +{remainingCount}
            </div>
          )}
        </div>
        <span className="text-gray-600 text-caption-2">
          {reviewedLength > 0
            ? `${reviewedLength} ${
                reviewedLength === 1 ? "Person" : "People"
              } Reviewed`
            : "No Reviews Yet"}
        </span>
      </div>
      <div className="flex items-center">
        <Icon
          name="Fave"
          className="text-yellow-400 w-4 h-4 mr-1 fill-current"
        />
        <span className="text-gray-900 font-medium">{averageRating}</span>
        <span className="text-gray-500">/5</span>
      </div>
    </div>
  );
};

export default Rating;
