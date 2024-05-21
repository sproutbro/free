import { SvelteKitAuth } from "@auth/sveltekit"
// import facebook from "@auth/sveltekit/providers/facebook";
import github from "@auth/sveltekit/providers/github";
import kakao from "@auth/sveltekit/providers/kakao";


const providers = [
    github,
    // facebook,
    kakao
]

export const { handle, signIn, signOut} = SvelteKitAuth({
    providers,
    providers,
    trustHost: true,
    theme: {
        logo: "https://next-auth.js.org/img/logo/logo-xs.png",
    }
})