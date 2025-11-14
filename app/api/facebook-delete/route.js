export async function GET() {
  return Response.json({
    success: true,
    message: "User data deletion instructions.",
    instructions_url: "https://next-auth-app-kohl.vercel.app/facebook-data-deletion"
  });
}

