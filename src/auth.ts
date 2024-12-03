import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        // Validate the credentials
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required');
        }

        // Find the user in the database
        // const user = await prismadb.user.findUnique({
        //   where: {
        //     email: credentials.email,
        //   },
        // });

        // Check if user exists and password is correct
        if (!user || !user.hashedPassword) {
          throw new Error('Email does not exist');
        }

        // Return user data if authentication is successful
        return user;
      },
    }),
  ],
  // Other NextAuth options like session, callbacks, etc.
}

export default NextAuth(authOptions);
