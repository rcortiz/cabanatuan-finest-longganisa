import { FaStar, FaRegStar, FaStarHalfStroke } from "react-icons/fa6";

export function renderRating(rating: number, max = 5) {
  return (
    <div className="flex gap-1 text-yellow-400">
      {Array.from({ length: max }).map((_, i) => {
        if (i + 1 <= rating) {
          return <FaStar key={i} color="#F4BB44" size={16} />;
        } else if (i + 0.5 === rating) {
          return <FaStarHalfStroke key={i} color="#F4BB44" size={16} />;
        } else {
          return <FaRegStar key={i} color="#F4BB44" size={16} />;
        }
      })}
    </div>
  );
}
