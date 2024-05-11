import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import Google from "@auth/sveltekit/providers/google";
import Naver from "@auth/sveltekit/providers/naver";

const providers = [
    Google,
    GitHub,
    Naver
]

export const { handle, signIn, signOut  } = SvelteKitAuth({
    providers,
    theme: {
        logo: "https://next-auth.js.org/img/logo/logo-xs.png",
    }
})