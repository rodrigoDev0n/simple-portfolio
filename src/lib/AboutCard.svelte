<script>
    console.log("Hello World");
</script>

<div class="cards-container textFadeIn">
    <div class="card">
        <div class="card-header">
            <h3>Sobre mi <i class="fa-regular fa-address-card"></i></h3>
        </div>
        <div class="card-body">
            <p>Hola 👋, mi nombre es Rodrigo soy egresado de la carrera 
                de programación y analisís en sistemas del Instituto Profesional AIEP 
                sede Los Angeles chile 🇨🇱, me gusta mucho el desarrollo web y las distribuciones
                de linux y los videojuegos.
            </p>
        </div>
    </div>
</div>

<style>
    .cards-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .card {
        padding: 10px;
        width: 50%;
        height: 200px;
        border-radius: 5px;
        margin: 10px;
        display: flex;
        flex-direction: column;
    }

    .card-header {
        padding-left: 10px;
        width: 100%;
        height: 50px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .card-body {
        padding-left: 10px;
        padding-right: 10px;
        width: 97%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>