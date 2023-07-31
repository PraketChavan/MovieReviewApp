import { ReviewType } from "../../model/review.interface";
import "./ReviewPost.css";

interface ReviewFormProp {
  review: ReviewType;
}

function ReviewPost({ review }: ReviewFormProp) {
  return (
    <>
      <div className="comment-thread">
        <div className="comment" id="comment-1">
          <div className="comment-heading">
            <div className="comment-info">
              <span className="comment-author">comment</span>
              <p className="m-0">
                {new Date(review.datePosted).toDateString()}
              </p>
            </div>
          </div>

          <div className="comment-body">
            <p>{review.reviewBody}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewPost;
