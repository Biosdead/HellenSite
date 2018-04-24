<template>
  <div id="app">
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
<footeriasai></footeriasai>
</div>
</template>

<script>
import product from './components/Produto.vue'
import footeriasai from './components/footerIASAI.vue'

export default {
  name: 'app',
  components: {
    product,
    footeriasai
  }
}
</script>
