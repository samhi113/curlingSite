import { ClerkProvider, SignedIn, SignedOut, SignOutButton, SignUp, ClerkLoaded } from '@clerk/nextjs';

export default function Account() {
  return (
    <ClerkProvider>
      <ClerkLoaded>
        <SignedIn>
          <main>
            <h1>Signed In</h1>
            <SignOutButton />
          </main>
        </SignedIn>
        <SignedOut>
          <SignUp routing="hash" />
        </SignedOut>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
