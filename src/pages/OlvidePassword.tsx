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

function OlvidePassword() {
  return (
    <main className="w-full h-screen bg-stone-950 flex flex-col justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Recuperar password</CardTitle>
          <CardDescription>Ingresa tu email y te enviaremos un correo para poder recuperar tu password</CardDescription>
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
                <Button>Enviar</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

export default OlvidePassword