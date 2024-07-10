// FAQ accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.FAQ-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.FAQ-group-header');
        if(!groupHeader) return;
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.FAQ-group-body');
        const icon = groupHeader.querySelector('i')

        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle Visibility of Body
        groupBody.classList.toggle('open');

        // Close other open FAQ bodies
        const otherGroups = faqContainer.querySelectorAll('.FAQ-group');
        console.log(otherGroups);
        otherGroups.forEach((otherGroup) => {
            if(otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.FAQ-group-body');
                const otherIcon = otherGroup.querySelector('i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });

    });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', ()=> {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => 
        mobileMenu.classList.toggle('active')
    );
})