<template>
  <div id="app">
    <div   class="columns">
  <div v-for="item in produtosA" class="column is-one-third">
    <product :foto="item.foto" :NomeProduto="item.nome" :MarcaProduto="item.marca" :Valor="item.valor" :Descricao="item.descricao"/>
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
  },
  data: function() {return {
    produtosA: [{foto: "https://www.casanostracosmeticos.com.br/media/catalog/product/cache/1/small_image/280x280/9df78eab33525d08d6e5fb8d27136e95/c/r/creme_de_massagem_d_gua_natural_complexo_ecofloral_650g.png", nome: "Creme de Massagem Laborene Castanha ", marca: "Índia e Centella Asiática 500g", valor : "R$50,99", descricao: "Aplicação a noite"},{foto: "https://www.casanostracosmeticos.com.br/media/catalog/product/cache/1/small_image/280x280/9df78eab33525d08d6e5fb8d27136e95/c/r/creme_de_massagem_d_gua_natural_leo_de_argan_650g__comprar.png", nome: "Creme de Massagem D'água Natural ", marca: "Termo Ativo Ecofloral 650g - Redutor e Modelador", valor : "R$74,39", descricao: "Usar ao dia"},{foto: "https://www.casanostracosmeticos.com.br/media/catalog/product/cache/1/small_image/280x280/9df78eab33525d08d6e5fb8d27136e95/r/e/reducel.png", nome: "Serum Corporal Essência D' Água", marca: "Redumodel", valor : "R$89,99", descricao: " 200g"}]
  }
  }
}
//"https://bulma.io/images/placeholders/1280x960.png"
</script>
