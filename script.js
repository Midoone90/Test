// 1. تمرير سلس بين الأقسام
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// 2. إظهار العناصر عند التمرير
const sections = document.querySelectorAll("section");

const appearOnScroll = new IntersectionObserver(
    (entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            appearOnScroll.unobserve(entry.target);
        });
    },
    { threshold: 0.2 }
);

sections.forEach(section => {
    appearOnScroll.observe(section);
});

// 3. تأثير حركة زر الاتصال عند التمرير
const contactButton = document.querySelector("#contact button");
window.addEventListener("scroll", () => {
    const contactSection = document.querySelector("#contact").offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > contactSection) {
        contactButton.classList.add("bounce");
    } else {
        contactButton.classList.remove("bounce");
    }
});

// 4. إضافة تاريخ السنة الحالية في الفوتر (اختياري)
const footer = document.createElement("footer");
footer.style.padding = "20px";
footer.style.background = "#00ff2d";
footer.style.color = "#000000";
footer.style.textAlign = "center";
footer.innerHTML = `&copy; ${new Date().getFullYear()} AMC LEADERS - جميع الحقوق محفوظة`;
document.body.appendChild(footer);
