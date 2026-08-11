import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Mock authorization for MVP
        if (credentials?.email === "admin@revolt.energy" && credentials?.password === "password") {
          return { id: "1", name: "Admin User", email: "admin@revolt.energy", role: "ADMIN" }
        }
        if (credentials?.email === "driver@revolt.energy" && credentials?.password === "password") {
          return { id: "2", name: "Driver User", email: "driver@revolt.energy", role: "DRIVER" }
        }
        if (credentials?.email === "user@example.com" && credentials?.password === "password") {
          return { id: "3", name: "Consumer User", email: "user@example.com", role: "CONSUMER" }
        }
        return null
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string
      }
      return session
    }
  },
  pages: {
    signIn: '/login',
  },
})
