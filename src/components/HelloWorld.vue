<template>
  <div>
  <nav class="navbar is-primary is-fixed-top">
  
  <div class="navbar-brand">
    <a class="navbar-item" href="#HomePage">
      <img src="../assets/logo.png"  width="112" height="28">
    </a>
  </div>

  <div class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="https://bulma.io/">
        {{Home}}
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="/documentation/overview/start/">
          {{Produtos}}
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="/documentation/overview/start/">
            {{Overview}}
          </a>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="/documentation/overview/start/">
          {{Servicos}}
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="/documentation/overview/start/">
            {{Overview}}
          </a>
        </div>
      </div>
    </div>
  </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary" data-social-network="Facebook" href="https://www.facebook.com/lennon.sfurtado">
              <img src="../assets/logo-facebook.png">
            </a>
          </p>
        </div>
      </div>
    </div>


  
  </div>  
</nav>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function(){return{
    Home: "Todos",
    Produtos : "Produtos",
    Servicos : "Serviços",
    Overview  : "Racco"
  }} 
}

</script>


<style>

</style>
