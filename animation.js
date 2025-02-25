    document.addEventListener("DOMContentLoaded", function () {
        const text = "L'outil de recherche intelligent.";
        const speed = 45; 
        const startDelay = 1350; 
        let i = 0;
        const title = document.querySelector(".slogan");

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

        
        setTimeout(type, startDelay);
        show();
    })
