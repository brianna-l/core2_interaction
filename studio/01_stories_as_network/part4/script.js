//six
const paragraph = document.getElementById('six1');
  const brokenWords = document.querySelectorAll('.broken-word');

  paragraph.addEventListener('mouseover', () => {
    brokenWords.forEach(word => {
      const randomX = Math.random() * 200 - 100;
      const randomY = Math.random() * 200 - 100;
      word.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
  });

  paragraph.addEventListener('mouseout', () => {
    brokenWords.forEach(word => {
      word.style.transform = 'translate(0, 0)';
    });
  });
//

function changeImageSource() {
  var image = document.getElementById('myImage');

  // Change the image source based on your requirements
  if (image.src.endsWith('assets/5.png')) {
    image.src = 'assets/13.png'; // Change to the second image
  } else {
    image.src = 'assets/5.png'; // Change back to the first image
  }
}