const mobileNav = document.getElementById('mymobilenav');
const mobileIcon = document.getElementById('mobile_icon');
const body = document.body;

body.addEventListener('click', showNav)
    function showNav() {
        if (mobileNav.style.display === 'none') {

        mobileNav.style.display = 'block';
        mobileIcon.src = mobileIcon.src.replace('images/icon-hamburger.svg', 'images/icon-close.svg');
    } else {
        mobileNav.style.display = 'none';
        mobileIcon.src = mobileIcon.src.replace('images/icon-close.svg', 'images/icon-hamburger.svg');
    }
}
