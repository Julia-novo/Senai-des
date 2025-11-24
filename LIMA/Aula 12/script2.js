window.onload = function() {

  var totalConsultas = consultas.length;
  var totalConsultasElemento = document.getElementById("totalConsultas");
  totalConsultasElemento.textContent = totalConsultas + " consultas registradas";

  var totalPorStatus = {};
  for (var i = 0; i < consultas.length; i++) {
    var statusAtual = consultas[i].status;

    if (totalPorStatus[statusAtual] === undefined) {
      totalPorStatus[statusAtual] = 1;
    } else {
      totalPorStatus[statusAtual]++;
    }
  }

  var listaStatus = document.getElementById("totalStatus");

  for (var status in totalPorStatus) {
    var item = document.createElement("li");
    item.textContent = status + ": " + totalPorStatus[status];
    listaStatus.appendChild(item);
  }

  var totalPorEspecialidade = {};

  for (var i = 0; i < consultas.length; i++) {
    var especialidadeAtual = consultas[i].especialidade;

    if (totalPorEspecialidade[especialidadeAtual] === undefined) {
      totalPorEspecialidade[especialidadeAtual] = 1;
    } else {
      totalPorEspecialidade[especialidadeAtual]++;
    }
  }

  var listaEspecialidade = document.getElementById("totalEspecialidade");

  for (var esp in totalPorEspecialidade) {
    var item = document.createElement("li");
    item.textContent = esp + ": " + totalPorEspecialidade[esp];
    listaEspecialidade.appendChild(item);
  }

}

//box.style.display = "none"//
