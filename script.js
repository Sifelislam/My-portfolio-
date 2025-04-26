        // Script pour afficher automatiquement l'année actuelle
        document.addEventListener('DOMContentLoaded', function() {
            const currentYear = new Date().getFullYear();
            const experienceItems = document.querySelectorAll('.experience-item');
            
            // Animation des compétences au défilement
            const skillItems = document.querySelectorAll('.skill-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });
            
            skillItems.forEach(item => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = 0;
                item.style.transform = 'translateY(20px)';
                observer.observe(item);
            });
        });