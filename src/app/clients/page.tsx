const clientsMock = [
  {
    id: 1,
    name: "ACME Corp",
    contact: "acme@example.com",
    notes: "High priority client",
  },
  {
    id: 2,
    name: "Global Finance",
    contact: "global@example.com",
    notes: "New lead",
  },
  {
    id: 3,
    name: "Bright Solutions",
    contact: "bright@example.com",
    notes: "Follow-up next week",
  },
];

export default function ClientsPage() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Clients</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Client
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clientsMock.map((client) => (
          <div
            key={client.id}
            className="bg-white p-4 rounded shadow space-y-2"
          >
            <h2 className="text-lg font-bold">{client.name}</h2>
            <p className="text-gray-600">📧 {client.contact}</p>
            <p className="text-gray-500 text-sm">{client.notes}</p>
            <div className="flex space-x-2 text-sm mt-2">
              <button className="text-blue-600 hover:underline">View</button>
              <button className="text-green-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
