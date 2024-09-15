import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <div>No feedback yet</div>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
