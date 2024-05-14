<script>
    import CtAs from "./CTAs.svelte";
    import Header from "./Header.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
</script>
<SectionWrapper>
    <Header />
    <div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pd-14">
        <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold">
            <span class="text-indigo-400">바닷속</span> 모험
            <br />
            자유로운 숨, <span class="text-indigo-400">더 멀리</span>
        </h2>
        <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full">
            <span class="text-indigo-400">프리다이빙이란? </span>호흡을 유지하면서 물 속에서의 탐험을 즐기는 스포츠입니다.  
            스쿠버 장비 없이 호흡을 조절하며 심해를 탐험할 수 있어요.
            이는 <span class="text-indigo-400">물 속에서의 평화로움과 아름다움을 경험</span>할 수 있는 특별한 활동입니다.
        </p>
    </div>
</SectionWrapper>