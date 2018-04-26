<template>
<div>
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img v-bind:src="foto" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">Produto: {{NomeProduto}}</p>
        <p class="subtitle is-6">Marca: {{MarcaProduto}}</p>
      </div>
    </div>

    <div class="content">
      Descrição: {{Descricao}}
      <p class="subtitle is-6">Valor : {{Valor}}</p>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item button is-primary">Comprar</a>
    <a href="#" class="card-footer-item button is-info">Adicionar ao carrinho</a>
  </footer>
</div>
</div>
</template>

<script>
export default {
  name: 'product',
  props: ['foto','NomeProduto','MarcaProduto','Valor','Descricao']
}

</script>


<style>

</style>
