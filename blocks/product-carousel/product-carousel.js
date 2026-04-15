export default async function decorate(block) {
  const rows = [...block.children];
  if (rows.length < 2) return;

  // First row is the heading
  const headingRow = rows[0];

  // Remaining rows are product cards
  const cardRows = rows.slice(1);

  // Create the carousel track
  const track = document.createElement('div');
  track.className = 'carousel-track';

  cardRows.forEach((row) => {
    const cells = [...row.children];
    const card = document.createElement('div');
    card.className = 'carousel-card';

    // Cell 0 = image
    if (cells[0]) {
      const picture = cells[0].querySelector('picture');
      if (picture) {
        card.append(picture);
      }
    }

    // Cell 1 = text content (title, price, CTA)
    if (cells[1]) {
      const body = document.createElement('div');
      body.className = 'card-body';

      const h3 = cells[1].querySelector('h3');
      if (h3) body.append(h3);

      // Find price paragraph (contains del or just text price)
      const paragraphs = [...cells[1].querySelectorAll('p')];
      paragraphs.forEach((p) => {
        const hasLink = p.querySelector('a');
        if (hasLink) {
          // This is the CTA button
          const ctaDiv = document.createElement('div');
          ctaDiv.className = 'cta';
          ctaDiv.append(p);
          body.append(ctaDiv);
        } else if (p.textContent.includes('$')) {
          // This is a price paragraph
          p.className = 'price';
          body.append(p);
        }
      });

      card.append(body);
    }

    track.append(card);
    row.remove();
  });

  // Insert track after heading row
  block.append(track);
}
