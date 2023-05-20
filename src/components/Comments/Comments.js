import './Comments.scss';
import CommentsForm from '../CommentsForm/CommentsForm';
import Comment from '../Comment/Comment';

const Comments = ({video}) => {
    return (
        <div className='comments'>
            <h3 className='comments__count'>3 Comments</h3>
            <CommentsForm />
            <Comment comment = {video.comments[0]} />
        </div>
    );
};

export default Comments;