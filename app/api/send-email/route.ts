import { Resend } from "resend"
import { emailSchema } from "@/lib/validations/email"
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = emailSchema.parse(body)
    const adminEmail = process.env.ADMIN_EMAIL as string

    await resend.emails.send({
      from: "Matchs de Légende <onboarding@resend.dev>",
      to: email,
      subject: "Votre inscription à Classik Games",
      html: `
        <h1>Merci pour votre inscription !</h1>
        <p>Bonjour,</p>
        <p>Vous venez de s'inscrire à classik games. Merci pour votre soutien !</p>
        <p>Nous informerons quand de nouveaux matchs seront disponibles.</p>
        <p>L'équipe Classik Games</p>
      `,
    })
    await resend.emails.send({
      from: "Matchs de Légende <noreply@resend.dev>",
      to: adminEmail,
      subject: "Nouvelle inscription à Classik Games",
      html: `
        <h1>Nouvelle inscription !</h1>
        <p>Bonjour,</p>
        <p>${email} vient de s'inscrire au site.</p>
        <p>Super on continue !!</p>
      `,
    })

    return new Response(JSON.stringify({ userEmail: email }), {
      status: 200,
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error sending email", details: error }),
      { status: 500 }
    )
  }
}
