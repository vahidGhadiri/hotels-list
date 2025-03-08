import { FC, useMemo } from "react";
import { UserReview } from "@use-cases/hotel";
import { Icon } from "@components";

interface DetailRateProps {
  reviews?: UserReview[];
  maxAvatars?: number;
}

const Rating: FC<DetailRateProps> = ({ reviews = [], maxAvatars = 3 }) => {
  const averageRating = useMemo(() => {
    if (reviews.length === 0) return "0.0";
    const sum = reviews.reduce((total, review) => total + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  const visibleAvatars = useMemo(
    () => reviews.slice(0, Math.min(reviews.length, maxAvatars)),
    [reviews, maxAvatars]
  );

  const remainingCount =
    reviews.length > maxAvatars ? reviews.length - maxAvatars : 0;

  const reviewText =
    reviews.length > 0
      ? `${reviews.length} ${
          reviews.length === 1 ? "Person" : "People"
        } Reviewed`
      : "No Reviews Yet";

  return (
    <div className="flex items-center justify-between pb-4 border-b border-gray">
      <div className="flex items-center">
        <div className="flex -space-x-2 mr-2">
          {visibleAvatars.map((review) => (
            <img
              key={review.id}
              src={review.user.avatar}
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
          ))}
          {remainingCount > 0 && (
            <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white text-caption-3">
              +{remainingCount}
            </div>
          )}
        </div>
        <span className="text-gray-600 text-caption-2">{reviewText}</span>
      </div>
      <div className="flex items-center">
        <span className="text-gray-900 font-medium">{averageRating}</span>
        <span className="text-gray-500">/5</span>
        <Icon
          className="ml-1 fill-current"
          color="star"
          name="Fave"
          size={20}
        />
      </div>
    </div>
  );
};

export default Rating;
