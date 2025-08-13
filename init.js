document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements needed for the Start Screen ---
    const startScreenImg = document.getElementById('startScreenImg');
    const playGameBtn = document.getElementById('playGameBtn');
    const practiceBtn = document.getElementById('practiceBtn');
    const howToPlayBtn = document.getElementById('howToPlayBtn');
    const startScreenTooltip = document.getElementById('startScreenTooltip');
    const modalRoot = document.getElementById('modalRoot');
    const sndIntro = document.getElementById('sndIntro');

    let hasPlayedIntro = false;

    function playSound(el, volume) {
        if (!el) return Promise.reject();
        el.volume = volume;
        try {
            el.currentTime = 0;
            return el.play();
        } catch (e) {
            return Promise.reject(e);
        }
    }
    
    function showModal(html){
        modalRoot.innerHTML = `<div class="modal-backdrop fade-in"><div class="modal">${html}</div></div>`;
        modalRoot.style.display = 'block';
        const closeBtn = document.getElementById('modalClose');
        if (closeBtn) closeBtn.addEventListener('click', ()=>{ modalRoot.style.display='none'; modalRoot.innerHTML=''; });
        modalRoot.querySelector('.modal-backdrop').addEventListener('click', (ev)=>{ if (ev.target.classList.contains('modal-backdrop')){ modalRoot.style.display='none'; modalRoot.innerHTML=''; }});
    }

    // --- Function to Load and Start the Main Game ---
    function loadAndStartGame(isPractice) {
        // Set a global flag for the main script to read
        window.isPracticeMode = isPractice;

        if (!hasPlayedIntro) {
            playSound(sndIntro, 0.5).then(() => { hasPlayedIntro = true; }).catch(() => { hasPlayedIntro = false; });
        }

        // Check if the script is already loaded to avoid duplicates
        if (document.querySelector('script[src="game-logic.js"]')) {
             if(window.initializeGame) window.initializeGame();
        } else {
            const gameScript = document.createElement('script');
            gameScript.src = 'game-logic.js';
            // When the script is loaded, the initializeGame function inside it will run automatically.
            document.body.appendChild(gameScript);
        }
    }

    // --- Event Listeners for the Start Screen ---
    startScreenImg.addEventListener('click', () => loadAndStartGame(false));
    startScreenImg.addEventListener('mouseover', () => { startScreenTooltip.textContent = 'Click to Play!'; });

    playGameBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      loadAndStartGame(false);
    });
    playGameBtn.addEventListener('mouseover', (event) => { event.stopPropagation(); startScreenTooltip.textContent = 'Click to Play!'; });

    practiceBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      loadAndStartGame(true);
    });
    practiceBtn.addEventListener('mouseover', (event) => { event.stopPropagation(); startScreenTooltip.textContent = 'No timer, no penalty. Just fun!'; });

    howToPlayBtn.addEventListener('click', (event)=> {
      event.stopPropagation();
      showModal(`<h3>How to Play</h3><p><strong>Play Mode:</strong> Answer 13 questions to win $1,000,000. Get one wrong, and it's game over! Use 3 lifelines to help you. Guaranteed prizes at Q5 ($1,000) and Q10 ($32,000).</p><p><strong>Practice Mode:</strong> A casual way to test your knowledge. There's no timer and no penalty for wrong answers. The game ends after the last question.</p><div style="display:flex;justify-content:flex-end;margin-top:12px"><button id="modalClose" class="btn btn-start" style="padding:10px 16px">Got it!</button></div>`);
    });
    howToPlayBtn.addEventListener('mouseover', (event) => { event.stopPropagation(); startScreenTooltip.textContent = 'View game rules & lifelines'; });

    // Initial sound play attempt
    playSound(sndIntro, 0.5).then(() => {
        hasPlayedIntro = true;
    }).catch(() => {
        hasPlayedIntro = false;
    });
});
