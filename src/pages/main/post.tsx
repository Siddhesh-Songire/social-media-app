import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../config/firebase";
import { Post as IPost } from "./main";
import "./post.css";

interface Props {
  post: IPost;
}

interface Like {
  likeId: string;
  userId: string;
}

export const Post = (props: Props) => {
  const { post } = props;
  const [user] = useAuthState(auth);

  const [likes, setLikes] = useState<Like[] | null>(null);

  const likesRef = collection(db, "likes");

  const likesDoc = query(likesRef, where("postId", "==", post.id));

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikes(
      data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id }))
    );
  };

  const addLike = async () => {
    try {
      const newDoc = await addDoc(likesRef, {
        userId: user?.uid,
        postId: post.id,
      });
      if (user) {
        setLikes((prev) =>
          prev
            ? [...prev, { userId: user.uid, likeId: newDoc.id }]
            : [{ userId: user.uid, likeId: newDoc.id }]
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeLike = async () => {
    try {
      const likeToDeleteQuery = query(
        likesRef,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );

      const likeToDeleteData = await getDocs(likeToDeleteQuery);
      const likeId = likeToDeleteData.docs[0].id;
      const likeToDelete = doc(db, "likes", likeId);
      await deleteDoc(likeToDelete);
      if (user) {
        setLikes(
          (prev) => prev && prev.filter((like) => like.likeId !== likeId)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const hasUserLiked = likes?.find((like) => like.userId === user?.uid);

  useEffect(() => {
    getLikes();
  }, []);

  return (
    // <div>
    //   <div className="title">
    //     <h1> {post.title}</h1>
    //   </div>
    //   <div className="body">
    //     <p> {post.description} </p>
    //   </div>

    //   <div className="footer">
    //     <p> @{post.username} </p>
    //     <button onClick={hasUserLiked ? removeLike : addLike}>
    //       {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}{" "}
    //     </button>
    //     {likes && <p> Likes: {likes?.length} </p>}
    //   </div>
    // </div>
    <div className="card post-card p-3 mx-2 mb-4">
      <div className="d-flex align-items-start">
        <div className="avatar me-3">
          {/* Display user avatar or profile image */}
        </div>
        <div className="flex-grow-1">
          <div className="d-flex align-items-center">
            <h5 className="card-title strong mb-0">{post.title}</h5>
          </div>
          <p className="card-text mb-3">{post.description}</p>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <div
            className="like-btn me-2"
            onClick={hasUserLiked ? removeLike : addLike}
          >
            {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
          </div>
          {likes && (
            <p className="likes mb-0">
              <span className="like-icon me-1">&#10084;</span>
              {likes.length}
            </p>
          )}
        </div>
        <span className="username">@{post.username}</span>
      </div>
    </div>
  );
};
