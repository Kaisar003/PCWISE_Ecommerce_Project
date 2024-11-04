import { connectDB } from '@/dbConfig/dbConfig';
import NextAuth from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/userModel';
import bcrypt from "bcryptjs";

async function login(credentials) {
    try {
        connectDB();
        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error("Wrong email!");
        const isCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isCorrect) throw new Error("Wrong password!");
        return user;
    } catch (error) {
        console.log("Error while logging in.", error);
        throw new Error("Something went wrong")
    }
}

export const authOptions = {
    pages: {
        signIn: "/login",
    },
    providers: [
        // OAuth authentication providers...
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET
        // }),
        // // Passwordless / email sign in
        // EmailProvider({
        //     server: process.env.MAIL_SERVER,
        //     from: 'NextAuth.js <no-reply@example.com>'
        // }),

        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    throw new Error("Failed to login.");
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email;
                token.password = user.password;
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.email = token.email;
                session.user.password = token.password;
                session.user.id = token.id;
            }
            return session;
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };