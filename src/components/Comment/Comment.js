import './Comment.scss';
import { date } from '../../utils';

const Comment = ({comment}) => {

    // let day = new Date(comment.timestamp);
    // console.log(day);

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