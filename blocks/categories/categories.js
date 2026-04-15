export default async function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    // First cell has the image, second cell has the label link
    const imgCell = cells[0];
    const labelCell = cells[1];

    if (imgCell && labelCell) {
      // Wrap the entire tile in a link for better click target
      const link = labelCell.querySelector('a');
      if (link) {
        const href = link.getAttribute('href');
        const wrapper = document.createElement('a');
        wrapper.href = href;
        wrapper.className = 'categories-tile-link';
        wrapper.setAttribute('aria-label', link.textContent.trim());

        // Move image and label into the wrapper
        while (row.firstChild) {
          wrapper.appendChild(row.firstChild);
        }
        row.appendChild(wrapper);
      }
    }
  });
}
