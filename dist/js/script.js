const lineUp = document.querySelectorAll('.lineup'),
    percent = document.querySelectorAll('.percent');

percent.forEach((elem, i) => {
    lineUp[i].style.width = elem.innerHTML;
});