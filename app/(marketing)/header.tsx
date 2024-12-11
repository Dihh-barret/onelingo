import { ClerkLoaded, 
        ClerkLoading,
        SignedOut,
        SignInButton, 
        UserButton,
        SignedIn,
    SignIn} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";


export const Header = () => {

    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/duolingo icon.svg" height={40} width={40} alt="icon"/>
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
                        Onelingo
                    </h1>
                </div>
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin">

                    </Loader>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn >
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton fallbackRedirectUrl={"/learn"}>
                            Login
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    )
}