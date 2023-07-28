import { ReviewType } from "../../model/review.interface";

interface ReviewFormProp {
  setReviews: React.Dispatch<React.SetStateAction<ReviewType[]>>;
}

function ReviewForm({ setReviews }: ReviewFormProp) {
  return (
    <form className="was-validated">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="First and Last Name"
          required
        />
        <div className="invalid-feedback">Your name cannot be empty</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Comment
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          required
        ></textarea>
        <div className="invalid-feedback">Comment cannot be empty</div>
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}

export default ReviewForm;
