"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { ArrowRight } from "lucide-react"
import { emailSchema } from "@/lib/validations/email"

export function MoreMatchesButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate email
      const validatedData = emailSchema.parse({ email })

      // Send email
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
    <>
      <div className='flex justify-end w-full md:w-1/2 mx-auto'>
        <Button
          className='bg-green-800 rounded-full font-bold flex hover:scale-110 hover:bg-green-600 transition-all duration-200 ease-in-out text-base p-6 mr-4 mt-4'
          onClick={() => setIsOpen(true)}
        >
          <span>+ de matchs</span>
          <ArrowRight size={20} />
        </Button>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className='sm:max-w-md w-11/12 rounded-sm bg-green-800 text-slate-50'>
          <DialogHeader>
            <DialogTitle>{`D'autres matchs de légendes ?`}</DialogTitle>
            <DialogDescription className='text-slate-100'>
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
              className='placeholder:text-slate-50'
              disabled={isSubmitting}
            />
            <DialogFooter>
              <Button
                type='submit'
                className='bg-yellow-500 hover:bg-yellow-400 font-bold'
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Envoi en cours..."
                  : "Je veux d'autres matchs !"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
