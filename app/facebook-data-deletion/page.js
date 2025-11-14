export default function FacebookDataDeletion() {
  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Facebook Data Deletion</h1>

      <p>
        If you want to delete your data linked with our application, follow these steps:
      </p>

      <ol className="list-decimal list-inside mt-2">
        <li>Go to your Facebook Account Settings.</li>
        <li>Navigate to "Apps and Websites".</li>
        <li>Find our application in the list.</li>
        <li>Select "Remove" to delete all associated data.</li>
      </ol>

      <p className="mt-4">
        Or send us a request at: <strong>your-email@example.com</strong>
      </p>
    </div>
  );
}
