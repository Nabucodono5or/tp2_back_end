(function() {
  angular.module('myApp').config(function($stateProvider) {
    $stateProvider.state('categoria', {
      url: '/categoria',
      controller: 'categoriaController',
      controllerAs: '$ctrl',
      templateUrl: 'categoria/categoria.html'

    })
  })
})();

(function() {
  function categoriaController(entradaValida, requisicao) {

    this.categorias = requisicao.carregaCategoterias();
    this.sucesso = this.falha = false;

    this.formSubmit = (valor) => {
      console.log('lançado enter');
      if (entradaValida.repetido(valor, this.categorias)) {
        this.sucesso = false;
        this.falha = true;
      } else {
        this.sucesso = true;
        this.falha = false;
        requisicao.insereCategorias(valor);
      }
    }
  }

  categoriaController.$inject = ['entradaValida', 'requisicao'];
  angular.module('myApp').controller('categoriaController', categoriaController);

})();
