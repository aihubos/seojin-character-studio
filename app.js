const viewer = document.querySelector('#viewer');
for (const button of document.querySelectorAll('.preview')) {
  button.addEventListener('click', () => {
    const source = button.querySelector('img');
    document.querySelector('#viewer-title').textContent = button.dataset.title;
    const image = document.querySelector('#viewer-img');
    image.src = source.src;
    image.alt = source.alt;
    document.querySelector('#viewer-download').href = source.src;
    viewer.showModal();
  });
}
document.querySelector('#close').addEventListener('click', () => viewer.close());
