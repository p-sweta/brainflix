import "./Comments.scss";
import CommentsForm from "../CommentsForm/CommentsForm";
import Comment from "../Comment/Comment";

const Comments = ({currVideo}) => {
    console.log(currVideo.comments);
  return (
    <div className="comments">
      <h3 className="comments__count">{currVideo.comments.length} Comments</h3>
      <CommentsForm />
      {currVideo.comments.map((comment) => (
        <Comment 
            key={comment.id} 
            comment={comment} 
        />)
        )}
    </div>
  );
};

export default Comments;
