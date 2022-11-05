import { useState } from "react";
import axios from "axios";
import Feed from "./Feed";
import NewPost from "./NewPost";

const Comments = ({ postId, comments: initialComments }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = () => {
    console.log(newComment);

    axios
      .post(`http://localhost:3004/post/${postId}/comment`, { newComment })
      .then((res) => {
        console.log(newComment);
      });
  };

  return (
    <div style={{ border: "1px solid black" }}>
      {comments &&
        comments.map((comment, i) => (
          <div key={i + comment}>
            <p>{comment}</p>
          </div>
        ))}
      <div>
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </div>
      <button onClick={handleSubmitComment}>Submit</button>
    </div>
  );
};

export default Comments;
