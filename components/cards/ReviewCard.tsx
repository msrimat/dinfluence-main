import { IoStarSharp, IoStarOutline } from "react-icons/io5";

function ReviewCard({ review }: any) {
  return (
    <div className="p-5 flex flex-col space-y-2 lg:space-y-3 bg-white border rounded-xl lg:hover:scale-[0.975] transition-all cursor-pointer">
      <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-3">
        <div className="rounded-full overflow-hidden w-[56px] h-[56px]">
          <img className="h-full w-full object-cover" src={review.imageUrl} />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="text-[1.25rem] lg:text-[1.5rem] font-medium">
            {review.name}
          </div>
          <div className="flex items-center space-x-3 mt-2 md:mt-0 text-primary lg:text-[1.25rem]">
            <div className="flex items-center space-x-1">
              {Array(5)
                .fill(null)
                .map((_, index) => {
                  return (
                    <div key={"review" + index}>
                      {Math.ceil(review.rating) >= index + 1 ? (
                        <IoStarSharp />
                      ) : (
                        <IoStarOutline />
                      )}
                    </div>
                  );
                })}
            </div>
            <div className="font-medium">{review.rating}</div>
          </div>
        </div>
      </div>
      <div>{review.comment}</div>
    </div>
  );
}

export default ReviewCard;
