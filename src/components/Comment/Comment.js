import './Comment.scss';

const Comment = () => {
    return (
        <section className="comment">
            <div className="comment__container">
                <div className="comment__image-placeholder"></div>
                <div className="comment__info">
                    <h4 className="comment__heading"></h4>
                    <p className="comment__date"></p>
                    <p className="comment__comment"></p>
                </div>
            </div>
        </section>
    );
};

export default Comment;