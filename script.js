document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const overlay = document.getElementById("card-overlay");
    const overlayImage = overlay.querySelector(".overlay-image img");
    const overlayTitle = overlay.querySelector(".overlay-title");
    const overlaySizeOptions = overlay.querySelector(".overlay-size-options");
    const overlayColorOptions = overlay.querySelector(".overlay-color-options");
    const closeButton = overlay.querySelector(".close-button");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const imgSrc = card.querySelector(".imgbx img").src;
            const title = card.querySelector("h2").textContent;
            const sizes = card.querySelectorAll(".Size span");
            const colors = card.querySelectorAll(".color span");

            overlayImage.src = imgSrc;
            overlayTitle.textContent = title;

            // Populate sizes
            overlaySizeOptions.innerHTML = "";
            sizes.forEach(size => {
                const sizeSpan = document.createElement("span");
                sizeSpan.textContent = size.textContent;
                overlaySizeOptions.appendChild(sizeSpan);
            });

            // Populate colors
            overlayColorOptions.innerHTML = "";
            colors.forEach(color => {
                const colorSpan = document.createElement("span");
                colorSpan.style.backgroundColor = color.style.backgroundColor;
                overlayColorOptions.appendChild(colorSpan);
            });

            overlay.classList.add("active");
        });
    });

    closeButton.addEventListener("click", () => {
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.remove("active");
        }
    });
});