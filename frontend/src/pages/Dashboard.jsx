export default function Dashboard({ role }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold mb-4">Welcome!</h1>

      {role === "admin" ? (
        <>
          <button className="bg-teal-500 text-white px-4 py-2 rounded">
            + Create Test
          </button>

          <div className="mt-6 bg-white p-6 rounded shadow">
            No tests created yet.
          </div>
        </>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">Upcoming: 0</div>
          <div className="bg-white p-4 rounded shadow">Completed: 0</div>
          <div className="bg-white p-4 rounded shadow">Score: 0%</div>
        </div>
      )}

    </div>
  );
}
