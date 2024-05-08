<script>
    import CourseCard from "./CourseCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    let productFeatures = [
        {
            featureList: [
                "이론 학습 및 개념 이해",
                "안전 수영장에서의 기술 연습",
                "현장에서의 안전한 다이빙 체험"
            ],
            description:
                "프리다이빙 입문자를 위한 특별한 하루 코스. 이론 지식과 호흡법을 연습하며, 보홀바다에서 인생샷을 남길 준비를 해보세요.",
            imgUrl: "assets/1.jpg",
        },
        {
            featureList: [
                "발라카삭(거북이) 100$",
                "나팔링(정어리) 150$",
                "닐라(고래상어) 200$"
            ],
            description:
                "펀다이빙으로 더 깊은 여행을 시작하세요. 함께라면 무한한 심연으로의 모험이 가능합니다. 지금 참여하세요!.",
            imgUrl: "assets/2.jpg",
        },
        {
            featureList: [
                "AIDA-1 100$",
                "AIDA-2 200$",
                "AIDA-3 300$",
                "AIDA-4 400$"
            ],
            description:
                "프리다이빙 자격증을 획득하고 더 깊은 바다를 탐험하는 모험가들을 기다립니다. 함께 심해의 아름다움을 느껴보세요!.",
            imgUrl: "assets/3.jpg",
        },
    ];
</script>

<SectionWrapper id="course">
    <div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-conter justify-center pb-10 md:pd-14">
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                프리다이빙의 세계로 <span class="text-indigo-400">모험</span>을 떠나보세요
            </p>
            <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                당신의 도전을 위한 완벽한 선택
            </h3>
        </div>
        {#each productFeatures as productFeature, index}
            <CourseCard {productFeature} {index}>
                {#if index===0}
                프리다이빙 입문,  
                <span class="text-indigo-400 font-medium">하루 코스</span>
                {:else if index===1}
                세계적인 다이빙 포인트체험,  
                <span class="text-indigo-400 font-medium"> 펀 다이빙</span>
                {:else}
                더 깊은 바다 탐험,
                <span class="text-indigo-400 font-medium"> 자격증코스</span>
                {/if}
            </CourseCard>
        {/each}
    </div>    
</SectionWrapper>