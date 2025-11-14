import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth";  // IMPORTANT: correct path

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      borderBottom: "1px solid #ddd"
    }}>
      <div>
        <Link href="/">MyApp</Link>
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link href="/">Home</Link>
        <Link href="/main">Main</Link>
        <Link href="/posts/1">Sample Post</Link>

        {session ? (
          <>
            <span>{session.user?.name}</span>

            {session.user?.image && (
              <Image
                src={session.user.image}
                width={32}
                height={32}
                alt="profile"
                style={{ borderRadius: "50%" }}
              />
            )}

            <form action="/api/auth/signout" method="post">
              <button type="submit">Logout</button>
            </form>
          </>
        ) : (
          <Link href="/signin">
            <button>Sign In</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
