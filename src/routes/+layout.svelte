<script>
    import "../app.css";
    import CtAs from "../components/CTAs.svelte";
    import { signOut, signIn } from "@auth/sveltekit/client";
    import { page } from "$app/stores";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import { openModal } from "../store";

    let y;
    $: outerHeight = 0;
</script>

{#if $openModal}
    <div class="fixed top-0 left-0 w-screen h-screen border-b bg-white z-50 flex flex-col gap-8 p-5 px-8 md:hidden">
        <div class="flex items-center justify-between gap-4 border-b pb-2">
            <h1 class="font-semibold">
                Jackie 
                <span class="text-indigo-400">Free diving center</span>
            </h1>   
            <button on:click={() => ($openModal = false)} class="outline-none border-none">
                <i class="fa-solid fa-xmark text-2xl"></i>
            </button>
        </div>
        {#if $page.data.session}
            <button on:click={() => signOut()}>
                Sign Out
            </button>
        {:else}
            <button on:click={signIn}>
                Login 
            </button>
        {/if}
        <div class="flex flex-col gap-4 flex-1">
            <a href="/#course" on:click={() => {$openModal = false}}
                class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
                <p class="duration-200 group-hover:pl-2 nanum text-3xl font-semibold">코스소개<i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
            </a>
            <a href="/#review" on:click={() => {$openModal = false}}
                class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
                <p class="duration-200 group-hover:pl-2 nanum text-3xl font-semibold">후기<i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
            </a>
            <a href="/#faqs" on:click={() => {$openModal = false}}
                class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
                <p class="duration-200 group-hover:pl-2 nanum text-3xl font-semibold">자주묻는 질문<i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
            </a>
            <a href="/contact" on:click={() => {$openModal = false}}
                class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
                <p class="duration-200 group-hover:pl-2 nanum text-3xl font-semibold">예약하기<i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
            </a>
            <a href="/dev-diary" on:click={() => {$openModal = false}}
                class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
                <p class="duration-200 group-hover:pl-2 nanum text-3xl font-semibold">개발일기<i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
            </a>
        </div>
    </div>
{/if}

{#if y > outerHeight}
    <div class="bg-white fixed top-0 left-0 w-full flex flex-col z-20 px-4 fadeIn">
        <Header />
    </div>
{/if}
<slot />
<Footer />
<svelte:window bind:scrollY={y} bind:outerHeight/>