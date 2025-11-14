export async function GET() {
  return Response.json({
    success: true,
    message: "User data deletion instructions.",
    instructions_url: "https://next-auth-app-git-main-javeria-mehmoods-projects.vercel.app/facebook-data-deletion"
  });
}
