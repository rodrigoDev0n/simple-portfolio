<script>
    import AnimatedTitle from "./AnimatedTitle.svelte";
</script>

<div class="info-container">
    <!-- Contiene texto sobre mi profesión y demas.. -->
    <AnimatedTitle />
    <button class="textFadeIn">Descarga mi Curriculum ⬇</button>
</div>

<style>
    .info-container {
        width: 460px;
        height: 200px;
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-left: 20px;
    }

    button {
        align-items: center;
        align-self: self-start;
        cursor: pointer;
        background-color: #181717;
        border: 1px solid #c8d1d9;
        border-radius: 5px;
        padding: 10px 20px;
        color: #c8d1d9;
        font-weight: bold;
        margin-top: 20px;
    }
</style>
