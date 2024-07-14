// Array to hold tutor details
const tutors = [
  {
      name: 'John Doe',
      nativeLanguage: 'English',
      level: ['Beginner', 'Conversation'],
      info: 'Experienced tutor with a passion for teaching languages.',
      image: 'John Doe.jpg'
  },
  {
      name: 'Maria Garcia',
      nativeLanguage: 'Spanish',
      level: ['Intermediate', 'Conversation'],
      info: 'Professional language tutor with years of experience.',
      image: 'MariaGarcia.jpg'
  },
  {
      name: 'Pierre Dupont',
      nativeLanguage: 'English',
      level: ['Advanced', 'Conversation'],
      info: 'Language enthusiast and experienced tutor.',
      image: 'PierreDupont.jpg'
  },
  {
      name: 'Belen Rueda',
      nativeLanguage: 'Spanish',
      level: ['Conversation'],
      info: 'Language enthusiast and experienced tutor.',
      image: 'BelenRueda.jpg'
  },
  {
      name: 'Carmen Maura',
      nativeLanguage: 'Spanish',
      level: ['Conversation'],
      info: 'Language enthusiast and experienced tutor.',
      image: 'tutor5.jpg'
  }
];

document.getElementById('tutorSearchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nativeLanguage = document.getElementById('nativeLanguage').value;
  const level = document.getElementById('level').value;

  const results = tutors.filter(tutor => {
      const matchesLanguage = nativeLanguage === '' || tutor.nativeLanguage === nativeLanguage;
      const matchesLevel = level === '' || tutor.level.includes(level);
      return matchesLanguage && matchesLevel;
  });

  displayResults(results);
});

function displayResults(results) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No tutors found.</p>';
  } else {
      results.forEach(tutor => {
          const tutorDiv = document.createElement('div');
          tutorDiv.classList.add('tutor');

          tutorDiv.innerHTML = `
              <h2>Tutor's name: ${tutor.name}</h2>
              <p>Native language: ${tutor.nativeLanguage}</p>
              <p>Level taught: ${tutor.level.join(', ')}</p>
              <p>Information about the tutor: ${tutor.info}</p>
                <div class="tutor-image-container">
                <img src="images/${tutor.image}" alt="${tutor.name}">
                </div>
          `;

          resultsContainer.appendChild(tutorDiv);
      });
  }
}
