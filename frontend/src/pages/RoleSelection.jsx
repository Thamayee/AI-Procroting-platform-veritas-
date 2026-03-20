export default function RoleSelection({ setPage, setRole }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-teal-500 text-white">
      <h1 className="text-3xl font-bold mb-8">Veritas AI</h1>

      <div className="flex gap-8">
        <div className="bg-white text-black p-6 rounded-xl w-64 text-center shadow">
          <h2 className="text-xl font-semibold">Student</h2>
          <button
            onClick={() => {
              setRole("student");
              setPage("login");
            }}
            className="mt-4 bg-teal-500 text-white px-4 py-2 rounded"
          >
            Continue
          </button>
        </div>

        <div className="bg-white text-black p-6 rounded-xl w-64 text-center shadow">
          <h2 className="text-xl font-semibold">Admin</h2>
          <button
            onClick={() => {
              setRole("admin");
              setPage("login");
            }}
            className="mt-4 bg-teal-500 text-white px-4 py-2 rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
