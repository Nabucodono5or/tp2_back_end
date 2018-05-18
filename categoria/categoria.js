(function () {
  angular.module('myApp').config(function ($stateProvider) {
    $stateProvider.state('categoria', {
      url: '/categoria',
      controller: 'categoriaController',
      controllerAs: '$ctrl',
      templateUrl: 'categoria/categoria.html'

    })
  })
})();

(function () {
  function categoriaController(){

    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];
  }

  categoriaController.$inject = [];
  angular.module('myApp').controller('categoriaController', categoriaController);

})();
