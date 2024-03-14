// import { prisma } from '@/lib/prisma'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import apiCaller from '@/utils/apiCaller'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

const authOption: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            // try {
            //     await apiCaller.createUser(user)
            // } catch (error) {
            //     // handle create User fail
            //     return false
            // }
            return true
        },
        async jwt({ token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token
                token.id = account.id
            }
            console.log('account:', account)
            return token
        },
        async session({ session, token }: any) {
            session.accessToken = token.accessToken
            session.user.id = token.id
            console.log('token: ', token)
            console.log('session: ', session)
            return session
        },
    },
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }
