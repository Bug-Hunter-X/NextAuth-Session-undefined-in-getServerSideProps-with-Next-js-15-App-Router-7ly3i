```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

// Use middleware for session handling instead of getServerSideProps
export default function About() {
  // Session will be provided by the middleware

  return (
    <div>
      <h1>About Page</h1>
      {session ? (
        <p>Logged in as {session.user.email}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}

//middleware.js
import { NextResponse } from 'next/server'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { unstable_getServerSession } from 'next-auth/next' 

export async function middleware(req) {
  const session = await unstable_getServerSession(req, req.headers.get('cookie'), authOptions)
  // Pass session to the page props
  req.session = session
  return NextResponse.next()
}

export const config = {
  matcher: ['/about'] // Only match the about page
}
```