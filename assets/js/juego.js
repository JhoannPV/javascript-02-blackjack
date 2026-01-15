/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */


//Baraja
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const puntosHTML = document.querySelectorAll('small');

// Función crea un nueva baraja
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);

    return deck;
}

crearDeck();

// Esta función me permite tomar una carta

const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();

    return carta;
}

// pedirCarta();

const valorCarta = (carta) => {
    // Se puede usar slice en vez de substring
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 1
            : (valor === 'J') ? 11
                : (valor === 'Q') ? 12
                    : 13
        : valor * 1;
}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
});