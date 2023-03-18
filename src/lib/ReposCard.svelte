<script>
    import FaBrandsGithubAlt from "svelte-icons-pack/fa/FaBrandsGithubAlt";
    import { getReposData } from "./helpers/getReposData";

    export let reposData = [];
    export let reposRealData = [];
    getReposData().then((data) => {
        reposData = data.repos;
        // Filtra los repositorios
        reposData.find((repo) => {
            if(repo.description !== null 
                && repo.language === 'JavaScript'
            ) {
                reposRealData = [...reposRealData, repo];
            }
        });
    });
</script>

<div class="cards-container textFadeIn">
    <div class="card">
        <div class="card-header">
            <h3>Visita mis proyectos en Github <i class="fa-brands fa-github"></i></h3>
        </div>
        <div class="card-body">
            {#each reposRealData as repo}
                <div class="repo">
                    <a href={repo.html_url} target="_blank">
                        <h4>{repo.name} <i class="fa-solid fa-flag"></i></h4>
                        {#if repo.description == null}
                            <p>No existe una descripción para este repo 😢</p>
                        {/if}
                        {#if repo.description !== null}
                            <p>{repo.description}</p>
                        {/if}
                        <div class="repo-footer">
                            <span><i class="fa-solid fa-language"></i> Lenguaje: {repo.language}
                            {#if repo.language === 'JavaScript'}
                                <i class="fa-brands fa-square-js"></i>
                            {/if}
                            </span>
                        </div>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .cards-container {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .card {
        border: 1px solid #c8d1d9;
        padding: 10px;
        width: 50%;
        height: 500px;
        world-wrap: break-word;
        border-radius: 5px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
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
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        overflow-y: auto;
        grid-gap: 15px;
    }

    .repo {
        border-radius: 15px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: start;
        transition: 0.2s ease-in-out;
        cursor: pointer;
    }

    .repo:hover {
        -webkit-box-shadow: 8px 4px 29px -8px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 8px 4px 29px -8px rgba(0, 0, 0, 0.75);
        box-shadow: 8px 4px 29px -8px rgba(0, 0, 0, 0.75);
        transform: scaleX(1.05) scaleY(1.05);
    }

    a {
        text-decoration: none;
        color: #c8d1d9;
    }

    p {
        color: #c8d1d9;
    }
</style>
