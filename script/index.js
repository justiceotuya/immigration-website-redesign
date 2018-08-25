//select all divs
let childrenDiv = $('main').children();
let navItemList = $('li.nav-item');

navItemList.on('click', (e) => {
    console.log(e);
    console.log(e.currentTarget.dataset.target);

    for (let i = 0; i < childrenDiv.length; i++) {

        if ('#' + childrenDiv[i].id == e.currentTarget.dataset.target) {

            // console.log(childrenDiv[i].id)
            childrenDiv[i].classList.value = 'show';
            navItemList[i].classList.value = 'nav-item active';
        } else {
            childrenDiv[i].classList.value = 'hide';
            navItemList[i].classList.value = 'nav-item';

        }
    }
});

$('.navbar-brand').click(() => {
    for (let i = 0; i < childrenDiv.length; i++) {

        if (childrenDiv[i].id == 'home') {

            console.log(childrenDiv[i].id);
            childrenDiv[i].classList.value = 'show';
            navItemList[i].classList.value = 'nav-item active';
        } else {
            childrenDiv[i].classList.value = 'hide';
            navItemList[i].classList.value = 'nav-item';

        }
    }
});
