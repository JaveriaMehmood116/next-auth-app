import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../auth";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "70vh"
    }}>
      <div style={{
        border: "1px solid #ddd",
        padding: "2rem",
        borderRadius: "8px",
        width: "320px",
        textAlign: "center",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ marginBottom: "1rem" }}>Sign In</h2>
        <p style={{ marginBottom: "1.5rem" }}>
          Choose one of the providers below:
        </p>

        <a href="/api/auth/signin/google">
          <button style={btnStyle}>Continue with Google</button>
        </a>

        <a href="/api/auth/signin/github">
          <button style={btnStyle}>Continue with GitHub</button>
        </a>

        <a href="/api/auth/signin/facebook">
          <button style={btnStyle}>Continue with Facebook</button>
        </a>
      </div>
    </div>
  );
}

const btnStyle = {
  width: "100%",
  padding: "0.6rem",
  marginTop: "0.5rem",
  border: "1px solid black",
  cursor: "pointer",
  background: "#f8f8f8",
  fontSize: "1rem",
};
