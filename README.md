# NextAuth Session Issue in Next.js 15 App Router

This repository demonstrates a common issue encountered when using NextAuth.js with Next.js 15's App Router and getServerSideProps. The problem arises from how the session is handled, potentially resulting in an undefined session object or unexpected data within it.

## Problem Description

The `About` page attempts to access a NextAuth session using `getServerSideProps`. In Next.js 15, this can be unreliable. The `session` object may be `undefined`, which causes the conditional rendering to default to 'Not logged in' even when a user is actually logged in.  Or, the session object may have the wrong structure or contain unexpected data.

## Solution

The provided solution uses the middleware approach from next-auth.  This leverages getServerSideProps to fetch the session and allows it to pass through the middleware, solving issues with getServerSideProps and how it interacts with the App Router.