import { useMemo, useState } from "react";
import { ReviewType } from "../../model/review.interface";
import ReviewPost from "../review/ReviewPost";

interface PagintorProp {
  list: ReviewType[];
  limit: number;
}

function Pagintor({ list, limit }: PagintorProp) {
  const maxLimit = Math.ceil(list.length / limit);
  const pageNumbers: number[] = Array.from(Array(maxLimit).keys());

  console.log(pageNumbers);

  const updateList = () => {
    let newList: ReviewType[] = [];
    newList.length = limit;
    for (
      let index = pageNumber * limit, i = 0;
      index < (pageNumber + 1) * limit && index < list.length;
      index++, i++
    ) {
      newList[i] = list[index];
    }
    return newList;
  };

  const decrementPageNumber = () => {
    setPageNumber(pageNumber == 0 ? 0 : pageNumber - 1);
  };

  const incrementPageNumber = () => {
    setPageNumber(pageNumber == maxLimit - 1 ? pageNumber : pageNumber + 1);
  };

  const [pageNumber, setPageNumber] = useState<number>(0);

  return (
    <>
      <ul className="list-group list-group-flush">
        {updateList().map((item: ReviewType) => (
          <li className="list-group-item">
            <ReviewPost review={item} />
          </li>
        ))}
      </ul>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className={"page-link " + (pageNumber == 0 && "disabled")}
              aria-label="Previous"
              onClick={decrementPageNumber}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {pageNumbers.map((i: number) => (
            <li className="page-item">
              <button
                className={"page-link " + (pageNumber == i && "active")}
                onClick={() => setPageNumber(i)}
              >
                {i + 1}
              </button>
            </li>
          ))}

          <li className="page-item">
            <button
              className={
                "page-link " + (pageNumber == maxLimit - 1 && "disabled")
              }
              aria-label="Next"
              onClick={incrementPageNumber}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagintor;
