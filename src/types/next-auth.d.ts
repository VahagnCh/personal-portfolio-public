import "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      role?: string
      email?: string | null
      name?: string | null
      image?: string | null
    }
  }
  interface JWT {
    role?: string
  }
} 