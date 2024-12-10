import { ClerkProvider, SignedIn, SignedOut, SignOutButton, SignUp, ClerkLoaded, UserProfile } from '@clerk/nextjs';

export default function Account() {
  return (
    <ClerkProvider>
      <ClerkLoaded>
        <SignedIn>
          <UserProfile></UserProfile>
          <SignOutButton></SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignUp routing="hash" />
        </SignedOut>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
