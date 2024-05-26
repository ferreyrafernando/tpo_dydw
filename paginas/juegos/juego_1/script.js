
$(document).ready(function() {
    const images = [
        'sign1.png', 'sign2.png', 'sign3.png', 'sign4.png',
        'sign5.png', 'sign6.png', 'sign7.png', 'sign8.png'
    ];

    let cards = [...images, ...images];
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let score = 100;
    let matches = 0;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function createBoard() {
        const board = $('.game-board');
        board.empty();
        cards = shuffle(cards);
        cards.forEach((card) => {
            const cardElement = $(`
                <div class="card" data-card="${card}">
                    <img src="assets/${card}" alt="${card}">
                </div>
            `);
            board.append(cardElement);
        });
        $('.card').on('click', flipCard);
    }

    function flipCard() {
        if (lockBoard || $(this).hasClass('flipped')) return;
    
        $(this).addClass('flipped');
    
        if (!firstCard) {
            firstCard = $(this);
            return;
        }
    
        secondCard = $(this);
    
        lockBoard = true;
    
        checkForMatch();
    }
    

    function checkForMatch() {
        const isMatch = firstCard.data('card') === secondCard.data('card');
    
        if (isMatch) {
            disableCards();
            matches++; 
            if (matches === cards.length / 2) { 
                celebrate();
            }
        } else {
            firstCard.addClass('error');
            secondCard.addClass('error');
            setTimeout(unflipCards, 400); 
            updateScore(-4); 
        }
    }
    
    

    function disableCards() {
        firstCard.off('click', flipCard);
        secondCard.off('click', flipCard);
        lockBoard = false; 
        resetBoard();
    }
    
    
    function unflipCards() {
        firstCard.removeClass('flipped error');
        secondCard.removeClass('flipped error');
        lockBoard = false; 
        resetBoard();
    }
    

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    function restartGame() {
        score = 100;
        matches = 0;
        updateScore(0, true);
        createBoard();
    }

    function updateScore(points, reset = false) {
        if (reset) {
            score = 100;
        } else {
            score += points;
        }
        $('#score').text(score);
    }

    function celebrate() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    $('.restart-button').on('click', restartGame);
    restartGame();

    document.getElementById('backButton').addEventListener('click', function() {
        window.history.back();
    });

});
