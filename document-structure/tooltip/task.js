const links = document.querySelectorAll('.has-tooltip');
let current = null;

links.forEach(e => {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = e.title;
  e.appendChild(tooltip);
  tooltip.style.left = e.getBoundingClientRect().left + 'px';

  e.onclick = (event) => {
    if (current === null) {
      tooltip.classList.add('tooltip_active');
      current = tooltip;
    }
    else
      if (current != null && current != tooltip) {
        current.classList.remove('tooltip_active');
        tooltip.classList.add('tooltip_active');
        current = tooltip;
      }
      else
        if (current === tooltip) {
          current.classList.remove('tooltip_active');
          current = null;
        }
    return false;
  }
})