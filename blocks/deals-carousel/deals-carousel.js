export default async function decorate(block) {
  const rows = [...block.children];
  if (rows.length < 2) return;

  // First row is the heading
  const headingRow = rows[0];
  headingRow.classList.add('deals-carousel-heading');

  // Last row is the CTA link
  const ctaRow = rows[rows.length - 1];
  ctaRow.classList.add('deals-carousel-cta');

  // Middle rows are product cards
  const cardRows = rows.slice(1, -1);

  // Create a scrollable track for cards
  const track = document.createElement('div');
  track.classList.add('deals-carousel-track');

  cardRows.forEach((row) => {
    row.classList.add('deals-carousel-card');
    const cells = [...row.children];

    // cells[0] = image, cells[1] = text content
    if (cells[0]) cells[0].classList.add('deals-carousel-card-image');
    if (cells[1]) cells[1].classList.add('deals-carousel-card-info');

    track.append(row);
  });

  // Insert the track after heading, before CTA
  headingRow.after(track);
}
