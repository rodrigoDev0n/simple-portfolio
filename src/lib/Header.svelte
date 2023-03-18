<header>
    <!-- Contenido del header links* -->
<!--     <div class="head-container">
        <a href="/home" class="hover-underline-animation">Inicio</a>
        <a href="/about" class="hover-underline-animation">Sobre mi</a>
        <a href="/curriculum" class="hover-underline-animation">Curriculum</a>
        <a href="/repos" class="hover-underline-animation">Repositorios</a>
    </div> -->
</header>

<style>

    header {
        height: 50px;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .head-container {
        height: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .head-container a {
        cursor: pointer;
        text-decoration: none;
        margin-right: 20px;
        font-weight: bold;
    }

    .hover-underline-animation {
        display: inline-block;
        position: relative;
        color: #fff;
    }

    .hover-underline-animation::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: #fff;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
</style>
