<template>
<div>
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
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
    <a href="#" class="card-footer-item button is-warning">Lista de Desejos</a>
  </footer>
</div>
</div>
</template>

<script>
export default {
  name: 'product',
  props: ['NomeProduto','MarcaProduto','Valor','Descricao']
}

</script>


<style>

</style>
