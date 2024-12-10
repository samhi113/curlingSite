import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUp,
  SignUpButton
} from '@clerk/nextjs'
import * as styles from './account.module.css';

export default function account(){
  return (
  <ClerkProvider>
    <SignUp>
      <SignUpButton/>
    </SignUp>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </ClerkProvider>
)
}
