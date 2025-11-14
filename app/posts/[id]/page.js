import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../auth";

export default async function PostPage({ params }) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/signin");

  let post = null;
  let error = null;

  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Post not found.");
    post = await res.json();

  } catch (err) {
    error = err.message;
  }

  if (error) {
    return (
      <div>
        <h2>Error Loading Post</h2>
        <p style={{ color: "red" }}>{error}</p>
        <button
          style={btnStyle}
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <hr />

      <p><strong>Viewed by:</strong> {session.user?.name}</p>
    </div>
  );
}

const btnStyle = {
  padding: "0.5rem 1rem",
  border: "1px solid black",
  cursor: "pointer"
};
