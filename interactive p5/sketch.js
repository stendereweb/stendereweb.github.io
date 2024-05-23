document.addEventListener("DOMContentLoaded", function() {
    const phone = document.getElementById('phone');
    const butterflies = document.querySelectorAll('.butterfly');
    const ringtone = document.getElementById('ringtone');
    const butterflySong = document.getElementById('butterflySong');

    // Function to play the ringtone
    function playRingtone() {
        ringtone.play();
    }

    // Function to stop the ringtone and start butterfly song
    function answerCall() {
        ringtone.pause();
        ringtone.currentTime = 0;
        butterflySong.play();
        startButterflies();
    }

    // Event listener for phone click
    phone.addEventListener('click', answerCall);

    // Function to start butterflies animation
    function startButterflies() {
        butterflies.forEach(butterfly => {
            butterfly.style.display = 'block';
            animateButterfly(butterfly);
        });
    }

    // Function to animate a butterfly
    function animateButterfly(butterfly) {
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;
        const speed = Math.random() * 3 + 1; // Random speed for each butterfly

        let x = Math.random() * containerWidth;
        let y = Math.random() * containerHeight;

        let directionX = Math.random() < 0.5 ? -1 : 1; // Random initial horizontal direction
        let directionY = Math.random() < 0.5 ? -1 : 1; // Random initial vertical direction

        function moveButterfly() {
            x += speed * directionX;
            y += speed * directionY;

            if (x < 0 || x > containerWidth) {
                directionX *= -1;
            }
            if (y < 0 || y > containerHeight) {
                directionY *= -1;
            }

            butterfly.style.left = x + 'px';
            butterfly.style.top = y + 'px';

            requestAnimationFrame(moveButterfly);
        }

        moveButterfly();
    }
    
    // Start playing the ringtone when the page loads
    playRingtone();
});