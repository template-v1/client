export function StarRating({ score = 5, color = "#FF4D30", size = 22 }) {
  return <span style={{ color, fontSize: size }}>{"★".repeat(score)}</span>;
}