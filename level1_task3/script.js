document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                let hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Animated Counter for Stats (if needed)
    let counters = document.querySelectorAll(".counter");
    let speed = 200;

    counters.forEach(counter => {
        let animate = () => {
            let value = +counter.getAttribute("data-target");
            let data = +counter.innerText;
            let time = value / speed;
            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 50);
            } else {
                counter.innerText = value;
            }
        };
        animate();
    });

    // Service Card Hover Effect (Expands on Hover)
    let serviceBoxes = document.querySelectorAll(".service-box");
    serviceBoxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.classList.add("active");
        });

        box.addEventListener("mouseleave", () => {
            box.classList.remove("active");
        });
    });

    // Hero Section Button Click Alert
    document.querySelector(".hero .btn").addEventListener("click", function () {
        alert("Thanks for clicking! 🚀 Let's get started!");
    });

    // Toggle Navbar Background on Scroll
    window.addEventListener("scroll", () => {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
            navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.background = "rgba(255, 255, 255, 0.9)";
            navbar.style.boxShadow = "none";
        }
    });

    // Lazy Loading Images for Better Performance
    let lazyImages = document.querySelectorAll("img[data-src]");
    let imageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.getAttribute("data-src");
                img.removeAttribute("data-src");
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

});
