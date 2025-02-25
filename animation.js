    document.addEventListener("DOMContentLoaded", function () {
        const text = "L'outil de recherche intelligent.";
        const speed = 45; 
        const startDelay = 1350; 
        let i = 0;
        const title = document.querySelector(".slogan");
        const element = document.getElementById("show");
        element.style.opacity = 0;

        function type() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                setTimeout(() => {
                    title.classList.add("done");
                }, startDelay); 
            }
        }

        function show() {
            let opacity = 0;
            const interval = 5;
            const increment = 0.05;

            function fadeIn() {
                if (opacity < 1) {
                    opacity += increment;
                    element.style.opacity = opacity;
                    setTimeout(fadeIn, interval);
                }
            }

            setTimeout(fadeIn, 4500);
        }

        
        setTimeout(type, startDelay);
        show();
    })
