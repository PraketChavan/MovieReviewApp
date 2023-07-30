import { useState } from "react";

interface ReviewFormProp {
  handleSumbit: (
    e: React.FormEvent<HTMLFormElement>,
    name: string,
    comment: string
  ) => void;
}

function ReviewForm({ handleSumbit }: ReviewFormProp) {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  //validate the form
  const validateForm = () => {
    return name.length > 0 && comment.length > 0;
  };

  return (
    <form
      className="was-validated"
      onSubmit={(e) => {
        handleSumbit(e, name, comment);
        setName("");
        setComment("");
      }}
    >
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="First and Last Name"
          value={name}
          onInput={(e) => setName((e.target as HTMLInputElement).value)}
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
          value={comment}
          onInput={(e) => setComment((e.target as HTMLInputElement).value)}
          required
        ></textarea>
        <div className="invalid-feedback">Comment cannot be empty</div>
      </div>
      <button
        type="submit"
        className="btn btn-success"
        disabled={!validateForm()}
      >
        Submit
      </button>
    </form>
  );
}

export default ReviewForm;
