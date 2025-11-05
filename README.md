This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Authentication setup (NextAuth + Prisma)

This project includes server-side scaffolding for authentication using NextAuth and Prisma (SQLite). To finish setup locally:

1. Install required packages:

```bash
npm install next-auth @next-auth/prisma-adapter @prisma/client prisma bcryptjs
```

2. Copy `.env.example` to `.env.local` and set `NEXTAUTH_SECRET` to a strong random value.

3. Initialize Prisma and run the migration to create the SQLite DB:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

4. Start the dev server:

```bash
npm run dev
```

API endpoints:
- `POST /api/auth/signup` — create new user (body: { email, password, name })
- NextAuth: `/api/auth/[...nextauth]` — sign in using the Credentials provider (email + password)

Notes:
- Passwords are hashed with bcrypt before storage.
- Sessions are stored in the database (Prisma Session model). Protect other API routes by checking the session.

