(function () {

  function categoriaController(){

    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];
  }

  categoriaController.$inject = [];
  angular.module('myApp').controller('categoriaController', categoriaController);

})();
