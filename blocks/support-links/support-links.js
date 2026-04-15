export default async function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    // First row is heading-only, skip restructuring
    if (cells.length < 2) return;
    // For card rows: cells[0] = icon image, cells[1] = text content
    // Merge icon into the text cell for a clean single-column card layout
    const iconCell = cells[0];
    const textCell = cells[1];
    const img = iconCell.querySelector('img');
    if (img && textCell) {
      textCell.prepend(iconCell.querySelector('picture') || img);
      iconCell.remove();
    }
  });
}
