"use client"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { emailSchema } from "@/lib/validations/email"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function EmailCapture({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const validatedData = emailSchema.parse({ email })

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi de l'email")
      }

      toast({
        title: "Succès !",
        description: "Vous recevrez bientôt de nouveaux matchs par email.",
        className: "bg-grass text-slate-50",
      })

      // Reset form
      setEmail("")
      setTimeout(() => setIsOpen(false), 1500)
    } catch (error) {
      console.error("Error:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description:
          error instanceof Error ? error.message : "Une erreur est survenue",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='sm:max-w-md w-11/12 rounded-sm bg-green-800 text-slate-50 '>
        <DialogHeader>
          <DialogTitle className='flex items-center text-sm md:text-base'>
            <Image
              src={`/classik-games.png`}
              alt='logo'
              width={80}
              height={80}
            />
            {`Autres matchs de légendes ?`}
          </DialogTitle>
          <DialogDescription className='text-slate-100 text-xs md:text-base'>
            {`Entrez votre email, recevez plus de matchs et redécouvrez des joueurs de légende.`}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='grid gap-4 py-4'>
          <Input
            type='email'
            placeholder='Votre email ici ...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='placeholder:text-slate-50 text-xs md:text-base'
            disabled={isSubmitting}
          />
          <DialogFooter>
            <Button
              type='submit'
              className='bg-yellow-500 hover:bg-yellow-400 font-bold text-xs md:text-base'
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Je veux d'autres matchs !"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
