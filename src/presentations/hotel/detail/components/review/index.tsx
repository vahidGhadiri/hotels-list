import type { FC } from "react";
import type { UserReview } from "@use-cases/hotel";

interface ReviewProps {
  reviews?: UserReview[];
}

const Review: FC<ReviewProps> = ({ reviews }) => {
  return (
    <>
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
    </>
  );
};

export default Review;
