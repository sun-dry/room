

document.addEventListener("DOMContentLoaded", () => {
    const notice = document.querySelector(".notice");
    const ntc = document.querySelector(".ntc");
    const subs = document.querySelectorAll(".sub");
    const btn = document.querySelector('.btn');


    notice.addEventListener("click", () => {
        ntc.style.display = "block";
    });

    btn.addEventListener('click', () => {
        ntc.style.display = "none";
    });

    subs.forEach(sub => {
        sub.addEventListener("click", () => {
            const content = sub.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
});