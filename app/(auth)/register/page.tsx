import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />

          <Button className="w-full">Register</Button>
        </CardContent>
      </Card>
    </main>
  );
}
