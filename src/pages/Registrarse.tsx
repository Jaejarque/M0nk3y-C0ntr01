import { useState } from "react";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
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
import { useAuthStore } from "@/store/authStore"

function Registrarse() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, error } = useAuthStore();

  const navigate = useNavigate();

  const handleRegistrarse = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if(email.trim() === "" || password.trim() === "") {
      toast.error("Por favor completa todos los campos");
      setLoading(false);
      return;
    }

    await register(email, password);
    if(!error){
      toast.success("Registro exitoso! Por favor verifica tu email.");
    } else {
      toast.error(`Error: ${error}`);
    }
    setLoading(false);
    setEmail("");
    setPassword("");
    navigate("/");
    return;
  }
  return (
    <main className="w-full h-screen bg-stone-950 flex flex-col justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Registrate</CardTitle>
          <CardDescription>Ingresa tu email y password</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={e => handleRegistrarse(e)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="**********"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="grid gap-2">
                <Button
                disabled={loading}
                >Registrate</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <Toaster position="top-center" richColors />
    </main>
  )
}

export default Registrarse