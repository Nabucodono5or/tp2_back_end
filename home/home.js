(function () {

  function homeController(requisicao) {

    this.listaUnica = true; // lista unica será configurado no init da pagina, entaõ aqui será removido
    this.categorias = requisicao.carregaCategoterias();

    this.tarefas = requisicao.carregaTarefas();

  }

  homeController.$inject = ['requisicao'];
  angular.module('myApp').controller('homeController', homeController);

})()
