document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const selectedFiltersContainer = document.querySelector('.selected-filters');
    const clearButton = document.querySelector('.clear-btn');

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const optionsContainer = button.nextElementSibling.querySelector('.filter-options');
            if (optionsContainer.classList.contains('visible')) {
                optionsContainer.classList.remove('visible');
            } else {
                document.querySelectorAll('.filter-options').forEach((options) => options.classList.remove('visible'));
                optionsContainer.classList.add('visible');
            }
        });
    });

    const addFilterButtons = document.querySelectorAll('.add-filter');
    addFilterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const filterValue = button.dataset.filter;
            const chip = document.createElement('div');
            chip.classList.add('filter-chip');
            chip.textContent = `× ${filterValue}`;
            chip.addEventListener('click', () => chip.remove());
            selectedFiltersContainer.appendChild(chip);
        });
    });

    clearButton.addEventListener('click', () => {
        selectedFiltersContainer.innerHTML = '';
    });
});