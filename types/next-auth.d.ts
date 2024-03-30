import { User } from "@prisma/client"
import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        dbPayload: {
            email: string;
            exp:number;
            iat:number
            jti:string
            name:string
            picture:string
            sub:string
        },
        type: string
    }
}