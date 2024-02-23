import NextAuth from "next-auth"
import { User } from '../../models/User';
import bcrypt from "bcrypt"
import * as mongoose from 'mongoose'
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../../libs/mongoConnect"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
      CredentialsProvider({
          name: 'credentials',
          id: 'credentials',
          credentials: {
              username: { label: "Email", type: "email", placeholder: "test@example.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const email = credentials?.email;
                const password = credentials?.password;
                
                mongoose.connect(process.env.MONGO_URL)
                const user = await User.findOne({email})
                const passwordOk = user && bcrypt.compareSync(password, user.password)
                
                if(passwordOk) {
                    return user
                }
                return null
            }
        })
    ],
    // callbacks: {
    //     redirect: async ({ url, baseUrl }) => {
    //       return baseUrl
    //     }
    // }
})

export { handler as GET, handler as POST }