import "./CommentsForm.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

const CommentsForm = () => {
  return (
    <section className="conversation">
      <form id="comment-form" class="form">
        <legend class="form__heading">Join the Conversation</legend>
        <div class="form__container">
          <div class="form__image-container">
            <img class="form__image" src={avatar} alt="mohan-muruge-avatar" />
          </div>
          <div>
                <label class="form__label" for="comment">COMMENT</label><br />
                <textarea
                  class="form__comment form__input"
                  name="comment"
                  id="comment"
                  placeholder="Add a new comment"
                ></textarea>
              </div>
              <button type="submit" class="form__button">COMMENT</button>
        </div>
      </form>
    </section>
  );
};

export default CommentsForm;
