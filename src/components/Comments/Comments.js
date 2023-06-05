import CommentsForm from "../CommentsForm/CommentsForm";
import Comment from "../Comment/Comment";
import "./Comments.scss";

const Comments = ({ currVideo }) => {
  return (
    <div className="comments">
      <h3 className="comments__count">{currVideo.comments.length} Comments</h3>
      <CommentsForm />
      <section className="comments__comments-list">
        {currVideo.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </section>
    </div>
  );
};

export default Comments;
