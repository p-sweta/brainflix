import avatar from "../../assets/images/Mohan-muruge.jpg";
import addComment from "../../assets/icons/add_comment.svg";
import "./CommentsForm.scss";

const CommentsForm = () => {
  return (
    <section className="conversation">
      <form id="comment-form" className="form">
        <div className="form__image-container">
          <img className="form__image" src={avatar} alt="profile-pic-avatar" />
        </div>

        <div className="form__container">
          <legend className="form__heading section__heading">
            JOIN THE CONVERSATION
          </legend>
          <fieldset className="form__fieldset">
            <div className="form__comment-container">
              <label className="form__label" htmlFor="comment">
                COMMENT
              </label>
              <br />
              <textarea
                className="form__comment"
                name="comment"
                id="comment"
                placeholder="Add a new comment"
                required
              ></textarea>
            </div>
            <button type="submit" className="form__button btn">
              <img
                className="form__comment-icon btn__icon"
                src={addComment}
                alt="add-comment-icon"
              />
              <h3 className="form__comment-text btn__text">COMMENT</h3>
            </button>
          </fieldset>
        </div>
      </form>
    </section>
  );
};

export default CommentsForm;
