import React, { useState } from "react";

import "./YoutubeVideo.scss";
import ReactPlayer from "react-player";

const YoutubeVideo = () => {
  const isValidUrlYoutobe = (url) => {
    const regex = /^(https?:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  };
  const [youtubeLink, setYoutubeLink] = useState(
    "https://www.youtube.com/watch?v=7kHFNJGwTUs&list=RD7kHFNJGwTUs&start_radio=1"
  );
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState("");

  const changeYoutubeHandlder = (e) => {
    setYoutubeLink(e.target.value);
  };
  const submitYoutubeHandlder = (e) => {
    e.preventDefault();
    if (isValidUrlYoutobe(youtubeLink)) {
      setSubmited(true);
      setError("");
    } else {
      setError("Url không hợp lệ . Vui lòng nhập lại Url");
    }
  };
  return (
    <div className="youtube">
      {submited ? (
        <div className="player">
          <ReactPlayer
            width={"400px"}
            height={"300px"}
            loop={true}
            controls={true}
            url={youtubeLink}
          />
          <button onClick={() => setSubmited(false)}>
            Choose another video
          </button>
        </div>
      ) : (
        <form onSubmit={submitYoutubeHandlder} className="input">
          <input
            value={youtubeLink}
            onChange={changeYoutubeHandlder}
            placeholder="Paste the Youtobe URL here"
          />
          <button type="submit">Click to watch</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default YoutubeVideo;
