document.addEventListener('DOMContentLoaded', function() {
  fetchVerseOfTheDay();
});

function fetchVerseOfTheDay() {
  fetch('https://beta.ourmanna.com/api/v1/get/?format=json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          displayVerse(data.verse.details.text, data.verse.details.reference);
      })
      .catch(error => {
          console.error('There was a problem fetching the verse of the day:', error);
      });
}

function displayVerse(verseText, reference) {
  const verseElement = document.getElementById('verse');
  const referenceElement = document.getElementById('reference');
  verseElement.textContent = verseText;
  referenceElement.textContent = reference;
}
