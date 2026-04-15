export default async function decorate(block) {
  // Each row is a column in the CTA bar (each has one cell).
  // Insert divider elements between rows for desktop display.
  const rows = [...block.children];
  const container = document.createDocumentFragment();

  rows.forEach((row, i) => {
    container.appendChild(row);
    if (i < rows.length - 1) {
      const divider = document.createElement('div');
      divider.className = 'cta-divider';
      container.appendChild(divider);
    }
  });

  // Wrap all rows + dividers in a single flex container
  const wrapper = document.createElement('div');
  wrapper.append(container);
  block.textContent = '';
  block.appendChild(wrapper);
}
