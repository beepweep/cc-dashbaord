<script lang="ts">
    import '@fontsource/outfit';
    import '../app.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    let { children } = $props();
</script>

<svelte:head>
    <title>Cardforyou - Find the Perfect Crypto Card</title>
    <meta name="description" content="Compare crypto debit cards from top providers like KAST, Crypto.com, Bybit, and more. Find the best cashback rates, rewards, and benefits for your needs." />
    <!-- Add other meta tags similarly -->
    <meta name="theme-color" content="#1e293b" />
</svelte:head>

<Header />
{@render children()}
<Footer />

<style>
    :global(body) {
        font-family: 'Outfit', system-ui, sans-serif;
    }
</style>
