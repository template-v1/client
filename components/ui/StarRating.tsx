// export function StarRating({ score = 5, color = "#FF4D30", size = 22 }) {
//   return <span style={{ color, fontSize: size }}>{"★".repeat(score)}</span>;
// }


import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export function StarRating({
  score = 0,
  max = 5,
  color = "#FF4D30",
  size = 22,
}: {
  score?: number;
  max?: number;
  color?: string;
  size?: number;
}) {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    if (score >= i) {
      // Sao đầy
      stars.push(<FaStar key={i} color={color} size={size} />);
    } else if (score >= i - 0.5) {
      // Nửa sao
      stars.push(<FaStarHalfAlt key={i} color={color} size={size} />);
    } else {
      // Sao rỗng
      stars.push(<FaRegStar key={i} color={color} size={size} />);
    }
  }

  return <span className="d-flex">{stars}</span>;
}
