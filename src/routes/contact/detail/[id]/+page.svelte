<script>
    import Header from "../../../../components/Header.svelte";
    import SectionWrapper from "../../../../components/SectionWrapper.svelte";

    export let data;
</script>

<SectionWrapper>
    <Header />
    <div class="container mx-auto p-6">
        <div class="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div class="px-6 py-4">
                <h1 class="text-3xl font-semibold text-gray-800 mb-4">{data.body.title}</h1>
                <p class="text-gray-600">게시물 내용 {data.body.content}</p>
            </div>
                <div class="px-6 py-4 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
                <span class="text-xs text-gray-500">{data.body.createdAt}</span>
                <button on:click={() => history.back()} class="text-sm text-indigo-400 hover:blue focus:outline-none">
                    뒤로 가기
                </button>
            </div>
        </div>
    </div>
</SectionWrapper>