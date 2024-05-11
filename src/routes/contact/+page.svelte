<script>
    import Header from "../../components/Header.svelte";
    import SectionWrapper from "../../components/SectionWrapper.svelte";

    export let data;
</script>
<SectionWrapper>
    <Header />  
    <table class="table-auto">
        <thead>
            <tr>
                <th class="">
                    Title
                </th>
                <th class="w-1/6">
                    Name
                </th>
                <th class="w-1/6">
                    Date
                </th>
            </tr>
        </thead>
        <tbody>
            {#each data.posts as post}
            <tr>
                <td class="text-center"><a href="/contact/detail/{post.id}">{post.title}</a></td>
                <td class="text-center">{post.name}</td>
                <td class="text-center">{post.createdAt}</td>
            </tr>
            {/each}
        </tbody>
    </table>

    <div class="mt-6 flex justify-between">
        <div>
            <a href="/contact/write">
                <button class="specialBtn">
                    <p class="text-base sm:text-lg md:text-xl">글쓰기</p>
                </button>
            </a>
        </div>
        <div>
            <form>
                <input name="query" type="text" class="border-gray-300 border-2 rounded-md px-4 py-2" placeholder="검색어를 입력하세요">
                <button class="specialBtnDark">
                    <p class="text-base sm:text-lg md:text-xl">검색</p>
                </button>
            </form>
        </div>
    </div>
</SectionWrapper>