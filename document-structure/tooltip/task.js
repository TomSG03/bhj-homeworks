const links = document.querySelectorAll('.has-tooltip');

links.forEach(e => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = e.title;
    e.appendChild(tooltip);
    tooltip.style.left = e.getBoundingClientRect().left + 'px';

    e.onclick = () => {
        activLink = document.querySelector('.tooltip_active');
        if (activLink != null) {
          activLink.classList.toggle('tooltip_active');
        }
        
        tooltip.classList.toggle('tooltip_active');
        return false;
    }
})