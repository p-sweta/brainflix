import { date } from "../../utils";
import "./Comment.scss";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment__container">
        <div className="comment__image-placeholder"></div>
        <div className="comment__info">
          <h4 className="comment__heading">{comment.name}</h4>
          <p className="comment__date">{date(comment.timestamp)}</p>
          <p className="comment__comment">{comment.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
