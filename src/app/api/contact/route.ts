import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Contact from '@/models/Contact'
import { sendContactEmail } from '@/lib/email'

export async function POST(req: Request) {
  try {
    // Parse request body first
    const { name, email, message } = await req.json()
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Connect to MongoDB
    await connectDB()
    console.log('Connected to MongoDB')

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      message,
    })
    console.log('Saved to MongoDB:', contact)

    // Send email (don't wait for it)
    sendContactEmail({ name, email, message })
      .then(() => console.log('Email sent successfully'))
      .catch(error => console.error('Email sending failed:', error))

    return NextResponse.json(
      { message: 'Message saved successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { message: 'Failed to process request' },
      { status: 500 }
    )
  }
} 