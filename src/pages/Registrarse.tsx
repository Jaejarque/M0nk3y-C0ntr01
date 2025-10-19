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

function Registrarse() {
  return (
    <main className="w-full h-screen bg-stone-950 flex flex-col justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Registrate</CardTitle>
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
                <Button>Registrate</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

export default Registrarse