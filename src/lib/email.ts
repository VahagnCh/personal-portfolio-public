import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(data: { name: string; email: string; message: string }) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || '',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      throw error
    }

    return emailData
  } catch (error) {
    console.error('Failed to send email:', error)
    throw error
  }
} 