import { prismaDB } from './prismaDb'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
  	adapter: PrismaAdapter(prismaDB),
	session: { strategy: 'jwt' },

    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
	  GithubProvider({
		clientId: process.env.GITHUB_CLIENT_ID!,
		clientSecret: process.env.GITHUB_CLIENT_SECRET!,
	  })
    ],
	// copied as it is from next-auth docs
	callbacks: {

		async session({ token, session }) {
			if (token) {
				// @ts-ignore
				session.user!.id = token.id
				session.user!.name = token.name
				session.user!.email = token.email
				session.user!.image = token.picture
			}
			return session
		},

		async jwt({ token, user }) {
			const dbUser = await prismaDB.user.findFirst({
				where: {
				email: token.email,
				},
			})
	
			if (!dbUser) {
				token.id = user!.id
				return token
			}
	
			return {
				id: dbUser!.id,
				name: dbUser!.name,
				email: dbUser!.email,
				picture: dbUser!.image,
			}
		},

		redirect() {
		  return '/'
		},
	},
}

export const getAuthSession = () => getServerSession(authOptions) // to get data all around the app .