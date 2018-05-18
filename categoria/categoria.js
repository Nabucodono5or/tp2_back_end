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
  function categoriaController(entradaValida) {

    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];
    this.sucesso = this.falha = false;

    this.formSubmit = (valor) => {
      console.log('lançado enter');
      if (entradaValida.repetido(valor, this.categorias)) {
        this.sucesso = false;
        this.falha = true;
      } else {
        this.sucesso = true;
        this.falha = false;
        this.categorias.push(valor);
      }
    }
  }

  categoriaController.$inject = ['entradaValida'];
  angular.module('myApp').controller('categoriaController', categoriaController);

})();
