import type { Review } from "@use-cases/hotel";
import { FC } from "react";

interface ReviewProps {
  reviews?: Review[];
}

const Review: FC<ReviewProps> = ({ reviews }) => {
  return (
    <div>
      {reviews?.map((review) => (
        <div className="py-3 border-b border-b-gray border-opacity-25">
          <div className="text-caption-1 flex justify-between">
            <p className="mr-2">{review.user.name}</p>
            <p>{review.rating}/5</p>
          </div>
          <p className="text-neutral text-caption-2 text-start  pl-4 pt-1">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Review;
