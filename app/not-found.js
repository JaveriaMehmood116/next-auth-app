import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "5rem"
    }}>
      <h1 style={{ fontSize: "2rem" }}>Page Not Found</h1>
      <p>The page you are trying to access does not exist.</p>

      <Link href="/">
        <button style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          border: "1px solid black",
          cursor: "pointer"
        }}>
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
