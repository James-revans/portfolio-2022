<script>
  import Router from 'svelte-spa-router'
  import Nav from './shared/components/nav/index.svelte';
  import Home from "./views/home/home.svelte";
  import Work from "./views/work/work.svelte";
  import Contact from "./views/contact/contact.svelte";

  const routes = {
    '/': Home,
    '/work': Work,
    '/contact': Contact
  }
</script>
<Nav/>
<Router {routes}/>
