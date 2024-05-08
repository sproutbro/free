<script>
    import { openModal } from "../store";
</script>

<header class="flex flex-col relative z-20">
    <div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6">
        <a href="/">
            <h1 class="font-semibold">
                Jackie 
                <span class="text-indigo-400">Free diving center</span>
            </h1>    
        </a>
        <button on:click={() => ($openModal = true)} class="md:hidden grid place-items-center">
            <i class="fa-solid fa-bars"></i>
        </button>
        <nav class="hidden md:flex items-center gap-4 lg:gap-6">
            <a href="/contact" class="duration-200 hover:text-indigo-400 cursor-pointer">문의하기</a>
            <a href="/review" class="duration-200 hover:text-indigo-400 cursor-pointer">후기</a>
            <a href="/reserve" class="duration-200 hover:text-indigo-400 cursor-pointer">예약하기</a>
        </nav>        
    </div>
</header>