// src/store/authStore.ts
import { create } from "zustand"
import { persist } from "zustand/middleware"
import supabase from "@/utils/supabase.ts";

interface AuthState {
  userEmail: string | null
  error: string | null

  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string) => Promise<void>
  forgotPassword: (email: string) => Promise<void>
  resetPassword: (newPassword: string) => Promise<void>
  logout: () => Promise<void>
  getEmail: () => string | null
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      userEmail: null,
      error: null,

      // ------------------------------------------------
      // 🔐 Login
      // ------------------------------------------------
      login: async (email, password) => {
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
          })
          if (error) throw error

          set({
            userEmail: data.user?.email ?? null,
            error: null,
          })
        } catch (err: any) {
          set({ error: err.message })
        }
      },

      // ------------------------------------------------
      // 🧩 Registro
      // ------------------------------------------------
      register: async (email, password) => {
        try {
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
          })
          if (error) throw error

          set({
            userEmail: data.user?.email ?? null,
            error: null,
          })
        } catch (err: any) {
          set({ error: err.message })
        }
      },

      // ------------------------------------------------
      // 📩 Recuperar contraseña
      // ------------------------------------------------
      forgotPassword: async (email) => {
        try {
          const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/resetpassword`,
          })
          if (error) throw error
          set({ error: null })
        } catch (err: any) {
          set({ error: err.message })
        }
      },

      // ------------------------------------------------
      // 🔑 Resetear contraseña
      // ------------------------------------------------
      resetPassword: async (newPassword) => {
        try {
          const { data, error } = await supabase.auth.updateUser({
            password: newPassword,
          })
          if (error) throw error

          set({
            userEmail: data.user?.email ?? null,
            error: null,
          })
        } catch (err: any) {
          set({ error: err.message })
        }
      },

      // ------------------------------------------------
      // 🚪 Logout
      // ------------------------------------------------
      logout: async () => {
        await supabase.auth.signOut()
        set({ userEmail: null, error: null })
        localStorage.removeItem("auth-storage")
      },

      // ------------------------------------------------
      // ✉️ Obtener email
      // ------------------------------------------------
      getEmail: () => get().userEmail ?? null,
    }),
    {
      name: "auth-storage",
    }
  )
)
