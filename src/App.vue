<template>
    <div id="app">
        <b-navbar variant="light">
            <b-container>
                <b-navbar-brand to="/">Transpoziční šifry</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="columnar" active>Sloupcová</b-nav-item>
                    <b-nav-item>Rail Fence</b-nav-item>
                </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
        
        <b-container class="content">
            <router-view />
        </b-container>

        <footer class="fixed-bottom bg-light">
            <b-container>
                2020, bakalářská práce
            </b-container>
        </footer>
    </div>
</template>

<style scoped>
    .content {
        padding: 2em 0;
    }
    footer {
        text-align: center;
        padding: 1em;
    }
</style>
