import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Post } from "./post";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Landing } from "./landing";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

export const Main = () => {
  const [postList, setPostList] = useState<Post[] | null>(null);
  const postsRef = collection(db, "posts");

  const [user] = useAuthState(auth);

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="container my-4 d-flex flex-wrap">
        {!user && <Landing />}
        {postList?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
