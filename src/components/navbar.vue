<template>
<div>
<nav class="navbar is-primary is-fixed-top">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="../assets/logo.png" width="112" height="28">
    </a>

    <div class="navbar-burger burger" data-target="navMenubd-example">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navMenubd-example" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="/documentation/overview/start/">
          Estética
        </a>
        <div class="navbar-dropdown ">
          <a class="navbar-item " href="/documentation/overview/start/">
            Massagem
          </a>
          <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
            Depilação
          </a>
          <a class="navbar-item " href="http://bulma.io/documentation/columns/basics/">
            Banho de Lua
          </a>
          <a class="navbar-item " href="http://bulma.io/documentation/layout/container/">
            Limpeza Facial
          </a>
          <a class="navbar-item " href="http://bulma.io/documentation/form/general/">
            Banho de Ouro
          </a>
          <a class="navbar-item " href="http://bulma.io/documentation/elements/box/">
            Selagem
          </a>

          <a class="navbar-item" href="http://bulma.io/documentation/components/breadcrumb/">
              Bronzeamento
        </a>

          <hr class="navbar-divider">
              <a class="is-size-6-desktop navbar-item">
                <strong class="has-text-info">Promoções</strong>
              </a>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="/documentation/overview/start/">
          Cosméticos
        </a>
        <div class="navbar-dropdown ">
          <a class="navbar-item " href="/documentation/overview/start/">
            Life Botanical
          </a>
          <a class="navbar-item " href="/documentation/overview/start/">
            Racco
          </a>
          <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
            Azenka
          </a>
          <a class="navbar-item " href="http://bulma.io/documentation/columns/basics/">
            Jeunesse
          </a>
          <a class="navbar-item " href="http://bulma.io/documentation/layout/container/">
            1 grama
          </a>
          <a class="navbar-item " href="http://bulma.io/documentation/form/general/">
            Robert
          </a>
          <hr class="navbar-divider">
              <a class="is-size-6-desktop navbar-item">
                <strong class="has-text-info">Promoções</strong>
              </a>
        </div>
      </div>
</div>
    <div class="navbar-end">
      <a class="navbar-item " href="http://bulma.io/expo/">
        <span class="bd-emoji">🎨</span> &nbsp;Carrinho
      </a>
      <a class="navbar-item " href="http://bulma.io/love/">
        <span class="bd-emoji">❤️</span> &nbsp;Login
      </a>
    
  </div>
  </div>
</nav>
</div>  
</template>


<script>
document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

export default {
  name: "navbar"
};
</script>


<style>

</style>
