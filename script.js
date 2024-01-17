function showDetails(memory) {
    const detailsElement = document.getElementById(memory);

    if (detailsElement.style.display === 'block') {
        detailsElement.style.maxHeight = '0';
        setTimeout(() => {
            detailsElement.style.display = 'none';
        }, 500);
    } else {
        detailsElement.style.display = 'block';
        detailsElement.style.maxHeight = `${detailsElement.scrollHeight}px`;
    }
    function showDetails(memory) {
        const detailsElement = document.getElementById(memory);
    
        detailsElement.classList.toggle('active');
    }
    
}