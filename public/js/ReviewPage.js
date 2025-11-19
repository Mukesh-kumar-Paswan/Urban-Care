document.querySelectorAll('.star').forEach(star => {
    star.onclick = function () {
        let rating = this.getAttribute('data-rating');
        document.querySelectorAll('.star').forEach((s, i) => {
            if (i < rating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    }
});