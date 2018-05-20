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

    this.alerts = [];
    this.tarefas = requisicao.carregaTarefas();

    this.closeAlert = (index) => {
      this.alerts.splice(index, 1);
    }

    this.selecioneCategoria = (item) => {
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
          requisicao.insereTarefas(objetoTarefa);
          this.alerts.push( {type: 'success', msg: 'OK! tarefa adicionado com sucesso'});
        }else {
          this.falha = true;
          this.sucesso = false;
          this.alerts.push({type: 'warning', msg: 'Erro! Não foi possível adicionar a tarefa. MAIS INFO SOBRE ERRO'});
        }
      }
    }
  }

  tarefaController.$inject = ['entradaValida', 'requisicao'];
  angular.module('myApp').controller('tarefaController', tarefaController);
})();
