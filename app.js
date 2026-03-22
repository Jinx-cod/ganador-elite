window.addEventListener('DOMContentLoaded', () => {
    // Wait 2 seconds, then open the curtains
    setTimeout(() => {
        document.body.classList.add('reveal');
        
        // Make the login content visible
        const content = document.getElementById('app-content');
        content.classList.remove('hidden');
        content.classList.add('visible');
    }, 2000);
});
