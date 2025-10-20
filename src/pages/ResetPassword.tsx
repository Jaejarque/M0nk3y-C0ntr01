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

function ResetPassword() {
  return (
    <main className="w-full h-screen bg-stone-950 flex flex-col justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Escribe tu nuevo password</CardTitle>
          <CardDescription>Ingresa tu password y confirmalo para poder recuperarlo</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="*********"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Repite tu password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="*********"
                />
              </div>
              <div className="grid gap-2">
                <Button>Recuperar</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

export default ResetPassword