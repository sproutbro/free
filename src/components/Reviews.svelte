<script>
    import ReviewCard from "./ReviewCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";

    let lim = true;

    let reviewsList = [
        {
            name: "이정균",
            review: "프리다이빙은 최상의 경험이었습니다. 깊은 바다 속에서의 평온한 순간들은 마치 다른 세계에 온 듯한 느낌을 주었습니다. 자유롭게 헤엄치며 심호흡을 하다 보니 마음의 여유와 안정이 찾아왔습니다. 물 속 생물들과의 만남은 정말 놀라웠고, 자연과의 조화 속에서의 경이로움은 잊을 수 없는 추억으로 남았습니다. 이 경험을 통해 자연과의 연결과 우리의 한계를 뛰어넘을 수 있다는 것을 깨달았습니다.",
            features: [
                "친절한 강사",
                "멋진 경험",
                "체계적인 시스템",
            ],
        },
        {
            name: "정지수",
            review: "프리다이빙은 최상의 경험이었습니다. 깊은 수중 세계로의 다이브는 일상의 모든 스트레스를 잊게 해주었고, 무한한 자유로움을 느낄 수 있었습니다. 숨을 쉴 때마다 몸과 마음이 하나가 되어 평화롭고 평온한 상태에 빠져들었습니다. 이러한 경험은 단순히 즐길 수 있는 활동을 넘어, 새로운 시각과 깊은 성찰을 안겨주었습니다.",
            features: [
                "훌륭한 숙소",
                "맛잇는 음식",
                "인생샷!",
            ],
        },
        {
            name: "이소라",
            review: "프리다이빙은 최상의 경험이었습니다. 바다 속 신비한 세계로의 여정은 일상에서 느끼지 못하는 놀라움과 경이로움을 안겨주었습니다. 숨을 참는 순간의 긴장과 푸른 바다 속에서의 자유는 새로운 자아를 발견하는 데 큰 도움이 되었습니다. 무엇보다도 자연과의 조화 속에서의 경이로움은 영원히 기억될 것입니다.",
            features: [
                "쓸것도 없다",
                "취업용 포폴",
                "냥냥냥",
            ],
        },
        {
            name: "이정균",
            review: "프리다이빙은 최상의 경험이었습니다. 깊은 바다 속에서의 평온한 순간들은 마치 다른 세계에 온 듯한 느낌을 주었습니다. 자유롭게 헤엄치며 심호흡을 하다 보니 마음의 여유와 안정이 찾아왔습니다. 물 속 생물들과의 만남은 정말 놀라웠고, 자연과의 조화 속에서의 경이로움은 잊을 수 없는 추억으로 남았습니다. 이 경험을 통해 자연과의 연결과 우리의 한계를 뛰어넘을 수 있다는 것을 깨달았습니다.",
            features: [
                "친절한 강사",
                "멋진 경험",
                "체계적인 시스템",
            ],
        },
        {
            name: "정지수",
            review: "프리다이빙은 최상의 경험이었습니다. 깊은 수중 세계로의 다이브는 일상의 모든 스트레스를 잊게 해주었고, 무한한 자유로움을 느낄 수 있었습니다. 숨을 쉴 때마다 몸과 마음이 하나가 되어 평화롭고 평온한 상태에 빠져들었습니다. 이러한 경험은 단순히 즐길 수 있는 활동을 넘어, 새로운 시각과 깊은 성찰을 안겨주었습니다.",
            features: [
                "훌륭한 숙소",
                "맛잇는 음식",
                "인생샷!",
            ],
        },
        {
            name: "이소라",
            review: "프리다이빙은 최상의 경험이었습니다. 바다 속 신비한 세계로의 여정은 일상에서 느끼지 못하는 놀라움과 경이로움을 안겨주었습니다. 숨을 참는 순간의 긴장과 푸른 바다 속에서의 자유는 새로운 자아를 발견하는 데 큰 도움이 되었습니다. 무엇보다도 자연과의 조화 속에서의 경이로움은 영원히 기억될 것입니다.",
            features: [
                "쓸것도 없다",
                "취업용 포폴",
                "냥냥냥",
            ],
        },
        {
            name: "이정균",
            review: "프리다이빙은 최상의 경험이었습니다. 깊은 바다 속에서의 평온한 순간들은 마치 다른 세계에 온 듯한 느낌을 주었습니다. 자유롭게 헤엄치며 심호흡을 하다 보니 마음의 여유와 안정이 찾아왔습니다. 물 속 생물들과의 만남은 정말 놀라웠고, 자연과의 조화 속에서의 경이로움은 잊을 수 없는 추억으로 남았습니다. 이 경험을 통해 자연과의 연결과 우리의 한계를 뛰어넘을 수 있다는 것을 깨달았습니다.",
            features: [
                "친절한 강사",
                "멋진 경험",
                "체계적인 시스템",
            ],
        },
        {
            name: "정지수",
            review: "프리다이빙은 최상의 경험이었습니다. 깊은 수중 세계로의 다이브는 일상의 모든 스트레스를 잊게 해주었고, 무한한 자유로움을 느낄 수 있었습니다. 숨을 쉴 때마다 몸과 마음이 하나가 되어 평화롭고 평온한 상태에 빠져들었습니다. 이러한 경험은 단순히 즐길 수 있는 활동을 넘어, 새로운 시각과 깊은 성찰을 안겨주었습니다.",
            features: [
                "훌륭한 숙소",
                "맛잇는 음식",
                "인생샷!",
            ],
        },
        {
            name: "이소라",
            review: "프리다이빙은 최상의 경험이었습니다. 바다 속 신비한 세계로의 여정은 일상에서 느끼지 못하는 놀라움과 경이로움을 안겨주었습니다. 숨을 참는 순간의 긴장과 푸른 바다 속에서의 자유는 새로운 자아를 발견하는 데 큰 도움이 되었습니다. 무엇보다도 자연과의 조화 속에서의 경이로움은 영원히 기억될 것입니다.",
            features: [
                "쓸것도 없다",
                "취업용 포폴",
                "냥냥냥",
            ],
        },
    ];
</script>
<SectionWrapper id="review">
    <div class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center">
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">다양한 의견과 경험들이 담겨 있어요.</p>
            <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                우리의 <span class="text-indigo-400">리뷰</span>를 확인해보세요!
            </h3>
        </div>
        <div class="flex flex-col md:flex-row gap-8 w-fit mx-auto">
            <div class="flex flex-col gap-8">
                {#each lim ? reviewsList.slice(0,4) : reviewsList as reviewItem, index}
                <ReviewCard {reviewItem} left={true} {index}/>
                {/each}
            </div>
            <div class="w-[1px] bg-slate-950 hidden md:flex"></div>
            <div class="flex flex-col gap-8">
                {#each lim ? reviewsList.slice(0,4) : reviewsList as reviewItem, index}
                <ReviewCard {reviewItem} {index}/>
                {/each}
            </div>
        </div>
        <button on:click={() => (lim = !lim)} class="specialBtn">
            <p>{lim ? "Show More" : "Show Less"}</p>
        </button>
        <!-- <div class="flex flex-col gap-10">
            <p class="mx-auto text-lg sm:text-xl md:text-2xl font-semibold">
                Trusted by 1,349 Swoldiers
            </p>
        </div> -->
    </div>
</SectionWrapper>