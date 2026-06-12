const API = "http://localhost:3000";

function listarQuartos() {

    const tabela = document.getElementById("listaQuartos");
    if (!tabela) return;

    fetch(API + "/quarto/listar")
        .then(res => res.json())
        .then(dados => {

            tabela.innerHTML = "";

            dados.forEach(q => {

                tabela.innerHTML += `
                    <tr>
                        <td>${q.numero}</td>
                        <td>${q.tipo}</td>
                        <td>
                            <a href="reservas.html?quartoId=${q.id}">
                                <button>Reservas</button>
                            </a>

                            <button onclick="excluirQuarto(${q.id})">
                                Excluir
                            </button>
                        </td>
                    </tr>
                `;
            });

        });
}

function cadastrarQuarto() {

    const btn = document.getElementById("btnCadastrar");
    if (!btn) return;

    btn.onclick = function () {

        const numero = document.getElementById("numero").value;
        const tipo = document.getElementById("tipo").value;

        if (!numero || !tipo) {
            alert("Preencha tudo");
            return;
        }

        fetch(API + "/quarto/cadastrar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ numero, tipo })
        })
        .then(() => window.location = "index.html");
    };
}

function excluirQuarto(id) {

    if (!confirm("Deseja excluir?")) return;

    fetch(API + "/quarto/excluir/" + id, {
        method: "DELETE"
    })
    .then(() => listarQuartos());
}

function listarReservas() {

    const tabela = document.getElementById("listaReservas");
    if (!tabela) return;

    const quartoId = pegarId().get("quartoId");

    if (!quartoId) return;

    fetch(API + "/reserva/listar")
        .then(res => res.json())
        .then(dados => {

            tabela.innerHTML = "";

            const filtradas = dados.filter(r => r.quartoId == quartoId);

            filtradas.forEach(r => {

                tabela.innerHTML += `
                    <tr>
                        <td>${r.id}</td>
                        <td>${r.hospede}</td>
                        <td>${r.dataEntrada}</td>
                        <td>${r.dataSaida}</td>
                        <td>
                            <button onclick="excluirReserva(${r.id})">
                                Excluir
                            </button>
                        </td>
                    </tr>
                `;
            });

        });

    const btn = document.getElementById("btnNovaReserva");
    if (btn) {
        btn.href = "cadastroReserva.html?quartoId=" + quartoId;
    }
}

function cadastrarReserva() {

    const btn = document.getElementById("btnCadastrarReserva");
    if (!btn) return;

    btn.onclick = function () {

        const hospede = document.getElementById("hospede").value;
        const entrada = document.getElementById("entrada").value;
        const saida = document.getElementById("saida").value;

        if (!hospede || !entrada || !saida) {
            alert("Preencha tudo");
            return;
        }

        fetch(API + "/reserva/cadastrar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                hospede,
                dataEntrada: entrada,
                dataSaida: saida,
                quartoId: Number(quartoId)
            })
        })
        .then(() => {
            window.location = "reservas.html?quartoId=" + quartoId;
        });
    };
}

function excluirReserva(id) {

    if (!confirm("Deseja excluir?")) return;

    fetch(API + "/reserva/excluir/" + id, {
        method: "DELETE"
    })
    .then(() => listarReservas());
}

function pegarId() {
    return new URLSearchParams(window.location.search);
}
document.addEventListener("DOMContentLoaded", () => {
    listarQuartos();
    cadastrarQuarto();

    listarReservas();
    cadastrarReserva();
});