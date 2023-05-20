import './Comments.scss';
import CommentsForm from '../CommentsForm/CommentsForm';
import Comment from '../Comment/Comment';

const Comments = () => {
    return (
        <div className='comments'>
            <h3 className='comments__count'>3 Comments</h3>
            <CommentsForm />
            <Comment />
        </div>
    );
};

export default Comments;