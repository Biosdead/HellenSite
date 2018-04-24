<template>
<div>
<nav class="navbar is-primary">
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

      <div class="navbar-item has-dropdown is-hoverable">
        <div class="navbar-link">
          More
        </div>
        <div id="moreDropdown" class="navbar-dropdown ">
          <a class="navbar-item " href="http://bulma.io/extensions/">
            <div class="level is-mobile">
              <div class="level-left">
                <div class="level-item">
                  <p>
                    <strong>Extensions</strong>
                    <br>
                    <small>Side projects to enhance Bulma</small>
                  </p>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <span class="icon has-text-info">
                    <i class="fa fa-plug"></i>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <a class="navbar-item " href="http://bulma.io/expo/">
        <span class="bd-emoji">🎨</span> &nbsp;Expo
      </a>
      <a class="navbar-item " href="http://bulma.io/love/">
        <span class="bd-emoji">❤️</span> &nbsp;Love
      </a>
    </div>

    <div class="navbar-end">
      <a class="navbar-item is-hidden-desktop-only" href="https://www.facebook.com/lilia.hellen" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fa fa-twitter"></i>
        </span>
      </a>
      <div class="navbar-item">
        <a class="navbar-item"  href="https://www.facebook.com/lilia.hellen">
            <span class="icon">
                <img src="../assets/logo-facebook.png" width="100%" height="100%" >
            </span>
        </a>
      </div>
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
