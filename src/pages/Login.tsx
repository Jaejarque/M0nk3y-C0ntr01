import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="w-full h-screen bg-stone-950 flex flex-col justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Ingresa a M0nk3yC0ntr01</CardTitle>
          <CardDescription>Ingresa tu email y password</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="**********"
                />
              </div>
              <div className="grid gap-2">
                <Button>Ingresar</Button>
                <Link
                className="font-semibold text-center pt-2 hover:underline text-sm"
                to="/olvidemipassword">Olvide mi password</Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

export default Login;
