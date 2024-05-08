<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    let faqs = [
        {
            question: "필요한 장비는 무엇인가요?",
            ans: "프리다이빙을 시작하기 위해서는 기본적으로 수중 안전을 위한 안전 장비들이 필요합니다. 이에는 마스크, 스노클, 수중탐험을 위한 수영복과 패드, 그리고 심호흡을 돕는 웨이트벨트 등이 포함됩니다.",
        },
        {
            question: "안전에 대해 어떤 점을 주의해야 하나요?",
            ans: "프리다이빙을 할 때에는 안전이 가장 중요한 요소입니다. 항상 다이빙 파트너와 함께 다니고, 적절한 트레이닝과 지식을 쌓은 후 다이빙을 시도해야 합니다. 또한 안전 준비물을 항상 확인하고, 신체 상태와 기상 조건을 고려해야 합니다.",
        },
        {
            question: "훈련은 어떻게 이루어지나요?",
            ans: "프리다이빙을 시작하는 사람들은 먼저 기본적인 훈련 과정을 거쳐야 합니다. 이러한 훈련에는 심호흡과 관련된 기술, 수중안전 및 구조, 그리고 의식적인 몸의 제어 등이 포함됩니다. 이러한 기술적인 훈련은 안전한 다이빙을 위한 필수적인 요소입니다.",
        },
    ];
</script>

<SectionWrapper id="faqs">
    <div class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center">
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                귀하의 모든 질문, 불만 및 질문에 대해
            </p>
            <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                자주묻는 질문
            </h3>
        </div>
        <div class="flex flex-col gap-8 sm:gap-10 md:gap-14 w-full">
            {#each faqs as faq}
                <div class="flex flex-col gap-2 text-left max-w-[800px] w-full mx-auto relative p-4 px-6">
                    <div class="absolute top-0 left-0 w-1/3 h-[1px] bg-slate-950 -translate-x-4">
                    </div>
                    <div class="absolute top-0 left-0 h-2/3 w-[1px] bg-slate-950 -translate-y-4">
                    </div>
                    <h4 class="text-lg sm:text-xl md:text-2xl pt-2">{faq.question}</h4>
                    <p class="pl-2">{faq.ans}</p>
                </div>
            {/each}
        </div>
    </div>
</SectionWrapper>