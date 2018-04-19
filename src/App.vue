<template>
  <div id="app">
    <HelloWorld/>


    <div class="columns ">
  <div class="column is-one-third">
    <product NomeProduto="Lennon" MarcaProduto="Sales Furtado" Valor="0/0" Descricao="Engenheiro"/>
  </div>
  <div class="column is-one-third">
    <product NomeProduto="Hugo" MarcaProduto="Sales Furtado" Valor="0/0" Descricao="Advogado"/>
  </div>
  <div class="column is-one-third">
    <product NomeProduto="Hugo" MarcaProduto="Sales Furtado" Valor="0/0" Descricao="Advogado"/>
  </div>
</div>

    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import product from './components/Produto.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    product
  }
}
</script>
