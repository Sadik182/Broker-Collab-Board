import Image from "next/image";

export default function Home() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Broker Collaboration Board
      </h1>
      <p className="text-lg text-gray-700">
        Your central place for managing clients, tasks, and collaborations.
      </p>
    </section>
  );
}
