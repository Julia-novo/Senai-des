const API = "http://localhost:3000";

const cadastrarQuarto = async (req, res) => {
    const quarto = req.body;

    const novoQuarto = await prisma.quarto.create({
        data: quarto
    });

    res.status(201).json(novoQuarto);
};

const listarQuartos = async (req, res) => {
    const quartos = await prisma.quarto.findMany();

    res.status(200).json(quartos);
};

const buscarQuarto = async (req, res) => {
    const id = Number(req.params.id);

    const quarto = await prisma.quarto.findUnique({
        where: { id },
        include: {
            reservas: true
        }
    });

    res.status(200).json(quarto);
};

const excluirQuarto = async (req, res) => {
    const id = Number(req.params.id);

    const quarto = await prisma.quarto.delete({
        where: { id }
    });

    res.status(200).json(quarto);
};

const cadastrarReserva = async (req, res) => {
    const reserva = req.body;

    const novaReserva = await prisma.reserva.create({
        data: reserva
    });

    res.status(201).json(novaReserva);
};

const listarReservas = async (req, res) => {
    const reservas = await prisma.reserva.findMany();

    res.status(200).json(reservas);
};

const buscarReserva = async (req, res) => {
    const id = Number(req.params.id);

    const reserva = await prisma.reserva.findUnique({
        where: { id }
    });

    res.status(200).json(reserva);
};
const excluirReserva = async (req, res) => {
    const id = Number(req.params.id);

    const reserva = await prisma.reserva.delete({
        where: { id }
    });

    res.status(200).json(reserva);
};

module.exports = {
    cadastrarQuarto,
    listarQuartos,
    buscarQuarto,
    excluirQuarto,
    cadastrarReserva,
    listarReservas,
    buscarReserva,
    excluirQuarto
};