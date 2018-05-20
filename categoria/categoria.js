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

    this.alerts = [];
    this.categorias = requisicao.carregaCategoterias();

    this.closeAlert = (index) => {
      this.alerts.splice(index, 1);
    }

    this.formSubmit = (valor) => {
      if (entradaValida.repetido(valor, this.categorias)) {
        this.alerts.push({type: 'warning', msg: 'Erro! Não foi possível adicionar a categoria. MAIS INFO SOBRE ERRO'});
      } else {
        requisicao.insereCategorias(valor);
        this.alerts.push( {type: 'success', msg: 'OK! Categoria adicionado com sucesso'});
      }
    }
  }

  categoriaController.$inject = ['entradaValida', 'requisicao'];
  angular.module('myApp').controller('categoriaController', categoriaController);

})();
