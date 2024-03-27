$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
});

function openTab(tabId) {
    // Hide all tab contents
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(tabContent) {
        tabContent.classList.remove('active');
    });

    // Deactivate all tab buttons
    var tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(tabButton) {
        tabButton.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Activate the selected tab button
    document.querySelector('[onclick="openTab(\'' + tabId + '\')"]').classList.add('active');
}


function toggleAccordion(tabId) {
    // Get all accordion contents
    var accordionContents = document.querySelectorAll('.accordion-content');

    // Loop through each accordion content
    accordionContents.forEach(function(content) {
        if (content.getAttribute('data-tab') === tabId) {
            content.classList.toggle('active');
        } else {

            content.classList.remove('active');
        }
    });
}
// Add click event listeners to accordion buttons
var accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var tabId = this.getAttribute('data-tab');
        toggleAccordion(tabId);
    });
});




