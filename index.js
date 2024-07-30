// part 4 start
document.addEventListener('DOMContentLoaded', (event) => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});
// part 4 ends


document.addEventListener('DOMContentLoaded', (event) => {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateProgressBar = (progressBar) => {
        const width = progressBar.getAttribute('data-width');
        progressBar.style.width = width;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBar(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});


//  The Additional Services section would follow the same pattern 

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('.services, .additional-services');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });
    });
</script>