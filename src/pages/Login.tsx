import { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { useAuthStore } from "@/store/authStore.ts";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const {login, error, userEmail} = useAuthStore();

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    if(email.trim() === "" || password.trim() === "") {
      toast.error("Por favor completa todos los campos");
      setLoading(false);
      return;
    }

    await login(email, password);
    
    if(error) {
      toast.error(error);
      setLoading(false);
      return;
    }
    toast.success(`Bienvenido de nuevo ${userEmail}`);
    setLoading(false);
    setEmail("");
    setPassword("");

    navigate("/inicio");
  }

  return (
    <main className="w-full h-screen bg-stone-950 flex flex-col justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Ingresa a M0nk3yC0ntr01</CardTitle>
          <CardDescription>Ingresa tu email y password</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={e => handleLogin(e)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  placeholder="m@example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  placeholder="**********"
                />
              </div>
              <div className="grid gap-2">
                <Button
                disabled={loading}
                >Ingresar</Button>
                <Link
                className="font-semibold text-center pt-2 hover:underline text-sm"
                to="/olvidemipassword">Olvide mi password</Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <Toaster position="top-center" richColors />
    </main>
  );
}

export default Login;
