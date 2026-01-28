"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useTranslations } from "next-intl"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Github } from "lucide-react"

<<<<<<< HEAD
export function LoginForm() {
=======
interface TurnstileConfigProps {
  enabled: boolean
  siteKey: string
}

interface LoginFormProps {
  turnstile?: TurnstileConfigProps
}

export function LoginForm(_props: LoginFormProps) {
>>>>>>> 97a93bab85f883486a64b51b66961384d54c3186
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const t = useTranslations("auth.loginForm")

  const handleGithubLogin = () => {
    setLoading(true)
    signIn("github", { callbackUrl: "/" }).catch((error) => {
      toast({
        title: t("toast.loginFailed"),
        description: error instanceof Error ? error.message : t("toast.registerFailedDesc"),
        variant: "destructive",
      })
      setLoading(false)
    })
  }

  return (
    <Card className="w-[95%] max-w-lg border-2 border-primary/20">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          {t("title")}
        </CardTitle>
        <CardDescription className="text-center">
          {t("subtitle")}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6">
        <div className="space-y-3 pt-1">
          <Button
            variant="outline"
            className="w-full"
            onClick={handleGithubLogin}
            disabled={loading}
          >
            <Github className="mr-2 h-4 w-4" />
            {t("actions.githubLogin")}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
