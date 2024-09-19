import propTypes from "prop-types";

function FeedbackStats({ feedback }) {
  // Calculate the average rating
  let averageRating =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;

  averageRating = averageRating.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: propTypes.array.isRequired,
};

export default FeedbackStats;
