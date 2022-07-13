const icomMenu = document.querySelector('.header_menu_icon');
if (icomMenu) {
    const menuBody = document.querySelector('.header_left_top_menu');
    icomMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('look');
        icomMenu.classList.toggle('active');
        menuBody.classList.toggle('active');

    });

}