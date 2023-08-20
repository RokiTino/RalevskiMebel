$(document).ready(function() {
    let currentIndex = 0;
    const images = $('.carousel-image');
    const maxIndex = images.length - 1;

    function showImage(index) {
        images.each(function(i, image) {
            if (i === index) {
                $(image).css({ transform: 'translateX(0)', opacity: '1' });
            } else {
                const distance = i - index;
                $(image).css({ transform: `translateX(${distance * 100}%)`, opacity: '0.6' });
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex === maxIndex) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex === 0) ? maxIndex : currentIndex - 1;
        showImage(currentIndex);
    }

    // Click event listeners for next and previous buttons
    $('#nextBtn').on('click', function() {
        nextImage();
    });

    $('#prevBtn').on('click', function() {
        prevImage();
    });

    // Initial display
    showImage(currentIndex);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust the offset as needed
                behavior: 'smooth'
            });
        }
    });
});

const colorGroupRows = document.querySelectorAll('.color-group');
const toggleButton = document.getElementsByClassName('.toggle-button')
// Add click event listeners to each color group header
colorGroupRows.forEach(groupRow => {
    toggleButton.addEventListener('click', () => {
        console.log('click');
        // Toggle visibility of rows within this color group
        const colorRows = groupRow.nextElementSibling.querySelectorAll('tr');
        colorRows.forEach(row => {
            row.classList.toggle('hidden');
        });
    });
});