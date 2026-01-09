import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold">Team Task Manager</h1>
        <p className="text-gray-500 mt-2">
          Simple. Fast. Organized.
        </p>

        <Button className="mt-6">
          Get Started
        </Button>
      </div>
    </main>
  );
}
