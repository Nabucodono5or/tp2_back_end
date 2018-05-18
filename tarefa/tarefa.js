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

  function tarefaController(entradaValida) {
    this.categorias = ['Casa', 'Trabalho', 'Faculdade'];
    this.selecioneCategoria = false;

    this.tarefas = [
      { nome: 'Varrer o quarto', categoria: 'Casa', feito: false },
      { nome: 'Lavar a louça', categoria: 'Casa', feito: true },
      { nome: 'Lavar as roupas', categoria: 'Casa', feito: false },
      { nome: 'Consertar a porta', categoria: 'Casa', feito: false },
      { nome: 'Terminar o relatório', categoria: 'Trabalho', feito: false },
      { nome: 'Estudar para a próxima reunião', categoria: 'Trabalho', feito: false },
      { nome: 'Enviar email sobre o problema', categoria: 'Trabalho', feito: false },
      { nome: 'Levar pó de café', categoria: 'Trabalho', feito: true },
      { nome: 'Comprar canetas novas', categoria: 'Trabalho', feito: true },
      { nome: 'Estudar Etapa 1', categoria: 'Faculdade', feito: true },
      { nome: 'Estudar Etapa 2', categoria: 'Faculdade', feito: true },
      { nome: 'Estudar Etapa 3', categoria: 'Faculdade', feito: false },
      { nome: 'Fazer TP1', categoria: 'Faculdade', feito: false }
      ];

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
        }else {
          this.falha = true;
          this.sucesso = false;
        }
      }
    }
  }

  tarefaController.$inject = ['entradaValida'];
  angular.module('myApp').controller('tarefaController', tarefaController);
})();
