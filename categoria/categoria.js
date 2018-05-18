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

    this.validado;
    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];

    this.formSubmit = (valor) => {
      console.log('lançado enter');
      if (entradaValida.repetido(valor, this.categorias)) {
        this.validado = false;
      } else {
        this.validado = true;
      }
    }
  }

  categoriaController.$inject = ['entradaValida'];
  angular.module('myApp').controller('categoriaController', categoriaController);

})();
