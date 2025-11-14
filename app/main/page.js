import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../auth";

export default async function MainPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/signin");

  let users = null;
  let error = null;

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch users.");
    users = await res.json();

  } catch (err) {
    error = err.message;
  }

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>Could not load users.</p>
        <p style={{ color: "red" }}>{error}</p>

        <form method="GET">
          <button style={btnStyle}>Retry</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Main Page (Protected)</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

const btnStyle = {
  padding: "0.5rem 1rem",
  border: "1px solid black",
  cursor: "pointer"
};
