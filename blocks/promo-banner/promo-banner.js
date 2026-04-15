export default async function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    // Row has: [image cell, text cell]
    // On mobile the layout is column-reverse (text below, image above)
    // CSS handles the visual ordering via flex-direction
  });
}
