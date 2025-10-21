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
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { useAuthStore } from "@/store/authStore";

function OlvidePassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { forgotPassword, error } = useAuthStore();

  const navigate = useNavigate();

  const handleOlvide = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if(email.trim() === ""){
      toast.error("El email es obligatorio");
      setLoading(false);
      return;
    }

    await forgotPassword(email);
    if(error){
      toast.error(error);
      setLoading(false);
      return;
    }

    toast.success("Se ha enviado un correo para recuperar tu password");
    setLoading(false);
    setEmail("");
    navigate("/login");
  }
  return (
    <main className="w-full h-screen bg-stone-950 flex flex-col justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Recuperar password</CardTitle>
          <CardDescription>Ingresa tu email y te enviaremos un correo para poder recuperar tu password</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={e => handleOlvide(e)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Button
                disabled={loading}
                >Enviar</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <Toaster
      position="top-center"
      richColors
      />
    </main>
  )
}

export default OlvidePassword