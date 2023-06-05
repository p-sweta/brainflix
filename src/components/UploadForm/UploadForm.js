import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/icons/publish.svg";
import "./UploadForm.scss";

const UploadForm = () => {
  const api_url = "http://localhost:8080";
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;

    axios
      .post(`${api_url}/videos`, {
        title: title,
        description: description,
        timestamp: Date.now(),
      })
      .then((res) => {
        alert("Upload Successful!!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="upload">
      <h2 className="upload__heading">Upload Video</h2>
      <form
        className="upload__form"
        id="upload__form"
        onSubmit={handleOnSubmit}
      >
        <div className="upload__container">
          <div className="upload__image-container">
            <h3 className="upload__subheading section__heading">
              VIDEO THUMBNAIL
            </h3>
            <img
              className="upload__image"
              src={videoThumbnail}
              alt="video-thumbnail"
            />
          </div>
          <div className="upload__form-container">
            <label className="upload__label section__heading" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
            <br />
            <input
              className="upload__input"
              type="text"
              name="title"
              id="title"
              placeholder="Add a title to your video"
              required
            />
            <br />
            <label
              className="upload__label section__heading"
              htmlFor="description"
            >
              ADD A VIDEO DESCRIPTION
            </label>
            <br />
            <textarea
              className="upload__description"
              name="description"
              id="description"
              placeholder="Add a description to your video"
              required
            ></textarea>
          </div>
        </div>
        <div className="upload__button-container">
          <button type="submit" className="upload__button btn">
            <img
              className="upload__icon btn__icon"
              src={publish}
              alt="add-comment-icon"
            />
            <h3 className="upload__btn-text btn__text">PUBLISH</h3>
          </button>
          <Link className="upload__cancel link" to="/">
            CANCEL
          </Link>
        </div>
      </form>
    </section>
  );
};

export default UploadForm;
