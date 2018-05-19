(function () {
  angular.module('myApp')
  .config(function ($stateProvider) {
    $stateProvider.state('tarefa', {
      url: '/tarefa',
      controller: 'tarefaController',
      controllerAs: '$ctrl',
      templateUrl: 'tarefa/tarefa.html'
    });
  });

})();

(function () {

  function tarefaController(entradaValida, requisicao) {
    this.categorias = requisicao.carregaCategoterias();
    this.selecioneCategoria = false;

    this.tarefas = requisicao.carregaTarefas();

    this.selecioneCategoria = (item) => {
      this.clickSelecioneCategoria = false;
      this.categoriaSelecionada = item;
      console.log(item);
    }

    function criarTarefa(nome, categoria) {
      this.nome = nome;
      this.ca = categoria;

      return {
        nome: this.nome,
        categoria: this.ca,
        feito: false
      };
    }

    this.submitForm = (entrada) => {
      if(entrada && this.categoriaSelecionada){
        if(!entradaValida.tarefaRepetido(entrada, this.tarefas)){
          this.sucesso = true;
          this.falha = false;
          let objetoTarefa = criarTarefa(this.entrada, this.categoriaSelecionada);
          //this.tarefas.push(objetoTarefa);
          requisicao.insereTarefas(objetoTarefa);
        }else {
          this.falha = true;
          this.sucesso = false;
        }
      }
    }
  }

  tarefaController.$inject = ['entradaValida', 'requisicao'];
  angular.module('myApp').controller('tarefaController', tarefaController);
})();
