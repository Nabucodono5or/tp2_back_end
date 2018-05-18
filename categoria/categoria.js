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

    this.entradaValida = false;
    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];

    this.formSubmit = (valor) => {
      if (entradaValida.repetido(valor, entradaValida)) {
        this.entradaValida = true;
      }
      this.entradaValida = false;
    }
  }

  categoriaController.$inject = ['entradaValida'];
  angular.module('myApp').controller('categoriaController', categoriaController);

})();
