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

})()
