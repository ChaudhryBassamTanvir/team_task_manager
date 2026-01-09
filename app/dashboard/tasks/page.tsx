import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const tasks = [
  {
    id: 1,
    title: "Design dashboard UI",
    status: "TODO",
  },
  {
    id: 2,
    title: "Setup authentication",
    status: "IN_PROGRESS",
  },
  {
    id: 3,
    title: "Deploy to Vercel",
    status: "DONE",
  },
];

export default function TasksPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <Button>Add Task</Button>
      </div>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">
                {task.title}
              </CardTitle>

              <Badge
                variant={
                  task.status === "DONE"
                    ? "success"
                    : task.status === "IN_PROGRESS"
                    ? "warning"
                    : "default"
                }
              >
                {task.status}
              </Badge>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-gray-500">
                Assigned to: You
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
