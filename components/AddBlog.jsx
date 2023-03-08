import { useState } from "react";

function AddBlog(props) {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    imgUrl === ""
      ? props.addBlog({ title, description })
      : props.addBlog({ title, description, imgUrl });
  };

  return (
    <form
      className="m-auto max-w-fit bg-base-300 p-5 mt-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Blog Title</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Image Url</span>
        </label>
        <input
          type="url"
          className="input input-bordered w-full max-w-xs"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          id="message"
          rows="4"
          class="block  p-2.5 w-full text-sm  rounded-lg border bg-base-100"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="form-control w-full max-w-xs mt-3">
        <input type="submit" value="Post" className="btn" />
      </div>
    </form>
  );
}

export default AddBlog;
