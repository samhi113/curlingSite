import * as pageStyles from './account.module.css';

import { ClerkProvider, SignedIn, SignedOut, SignOutButton, SignUp, ClerkLoaded, UserProfile } from '@clerk/nextjs';

export default function Account() {
  return (
    <main className={pageStyles.container}>
    <ClerkProvider>
      <ClerkLoaded>
        <SignedIn>
          <UserProfile routing='hash'/>
          <SignOutButton className={pageStyles.button}/>
        </SignedIn>
        <SignedOut>
          <SignUp routing="hash" />
        </SignedOut>
      </ClerkLoaded>
    </ClerkProvider>
    </main>
  );
}
