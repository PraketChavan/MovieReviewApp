import { ReviewType } from "../../model/review.interface";

interface ReviewFormProp {
  review: ReviewType;
}

function ReviewPost({ review }: ReviewFormProp) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Comment</h5>
          <p className="card-text">{review.reviewBody}</p>
        </div>
        <footer className="card-footer">
          {new Date(review.datePosted).toDateString()}
        </footer>
      </div>
    </>
  );
}

export default ReviewPost;
