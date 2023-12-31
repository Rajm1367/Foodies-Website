// active nav-bar
let nav=document.querySelector(".navigation-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("scroll-on")
    }
    else
    {
        nav.classList.remove("scroll-on")
    }
}

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 9000);
    counter("count2", 0, 7000);
    counter("count3", 0, 500);
    counter("count4", 0, 100,);
});

