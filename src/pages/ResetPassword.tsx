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
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore.ts";

function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [fpassword, setFPassword] = useState("");
  const [spassword, setSPassword] = useState("");

  const { resetPassword, error } = useAuthStore();

  const navigate = useNavigate();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (fpassword !== spassword) {
      toast.error("Los passwords no coinciden");
      return;
    }
    if(fpassword.trim() === "" || spassword.trim() === "") {
      toast.error("Los passwords no pueden estar vacios");
      return;
    }

    await resetPassword(fpassword);

    if(error){
      toast.error(error);
      setLoading(false);
      return;
    }

    setLoading(false);
    setFPassword("");
    setSPassword("");
    toast.success("Password reseteado correctamente");
    navigate("/login");
  }

  return (
    <main className="w-full h-screen bg-stone-950 flex flex-col justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Escribe tu nuevo password</CardTitle>
          <CardDescription>Ingresa tu password y confirmalo para poder recuperarlo</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={e => handleReset(e)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="*********"
                  value={fpassword}
                  onChange={e => setFPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Repite tu password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="*********"
                  value={spassword}
                  onChange={e => setSPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Button
                disabled={loading}
                >Recuperar</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <Toaster position="top-center" richColors />
    </main>
  )
}

export default ResetPassword