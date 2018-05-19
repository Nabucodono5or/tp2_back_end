(function () {

  angular.module('myApp')
  .service('entradaValida', function() {

    this.repetido = function (valor, array) {
      for (let i = 0; i < array.length; i++) {
        if(array[i].toLowerCase() === valor.toLowerCase()){
          return true;
        }
      }
      return false;
    }

    this.tarefaRepetido = function (valor, array) {
      for (let i = 0; i < array.length; i++) {
        if(array[i].nome.toLowerCase() === valor.toLowerCase()){
          return true;
        }
      }
      return false;
    }


  });

})();

(function () {
  angular.module('myApp')
  .service('requisicao', function () {

    var categorias = ['Casa', 'Trabalho', 'Faculdade'];

    var tarefas = [
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

      this.carregaCategoterias = function () {
        return categorias;
      }

      this.carregaTarefas = function () {
        return tarefas;
      }

      this.insereTarefas = function (tarefa) {
        tarefas.push(tarefa);
      }

      this.insereCategorias = function (categoria) {
        categorias.push(categoria);
      }

  })

})();
