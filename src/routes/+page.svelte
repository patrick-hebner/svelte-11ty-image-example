<script>
  import Image from "../lib/Image.svelte";

  export let data;
</script>

<!-- <pre>
    {JSON.stringify(data.stats, null, 2)}
</pre> -->
<div class="bg">
  <div class="img-wrapper">
    <Image cover width="1200" height="400" stats={data.stats} sizes="100vw" />
  </div>
  <h1>Image Example</h1>
</div>
<p class="content">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sed, fuga
  eligendi esse mollitia repellat quisquam blanditiis velit ipsa, error ad sit
  aut molestias omnis repudiandae nam asperiores, expedita neque.
</p>

<style>
  .bg {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  h1 {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    color: white;
    font-size: 10vw;
  }

  .img-wrapper {
    width: 100vw;
    height: 100vh;
  }
  .content {
    max-width: 120ch;
    margin: 2rem auto;
    font-size: 1vw;
    line-height: 1.5vw;
  }
</style>
