import { Plus } from "lucide-react";
import Link from "next/link";
export default async function ClientsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/clients`, {
    cache: "no-store",
  });
  const clients = await res.json();
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4">Clients</h1>
        <Link
          href="/clients/addClients"
          className="text-blue-600 hover:underline"
        >
          <button className=" flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md s mb-4 cursor-pointer hover:bg-blue-700 transition">
            <Plus size={16} />
            Add New Client
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client: any) => (
          <div
            key={client.id}
            className="bg-white p-4 rounded shadow space-y-2"
          >
            <h2 className="text-lg font-bold">{client.name}</h2>
            <p className="text-gray-600">📧 {client.email}</p>
            <p className="text-gray-500 text-sm">{client.phone}</p>
            <p className="text-gray-500 text-sm">{client.company}</p>
            <div className="flex justify-between py-4 text-sm mt-2">
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
