"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const initialTasks = [
  { id: 1, title: "Design dashboard UI", status: "TODO" },
  { id: 2, title: "Setup authentication", status: "IN_PROGRESS" },
  { id: 3, title: "Deploy to Vercel", status: "DONE" },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);

  // Modal form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("TODO");

  const addTask = () => {
    if (!title) return;
    setTasks([
      ...tasks,
      { id: tasks.length + 1, title, status },
    ]);
    // Reset
    setTitle("");
    setDescription("");
    setStatus("TODO");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Tasks</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Task</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Create New Task</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 mt-2">
              <Input
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Textarea
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODO">TODO</SelectItem>
                  <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
                  <SelectItem value="DONE">DONE</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => {
                  setTitle("");
                  setDescription("");
                  setStatus("TODO");
                }}>
                  Cancel
                </Button>
                <Button onClick={addTask}>Save</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">{task.title}</CardTitle>
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
              <p className="text-sm text-gray-500">{description || "No description"}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
