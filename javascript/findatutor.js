// Array to hold tutor details
const tutors = [
  {
    name: 'John Doe',
    nativeLanguage: 'English',
    level: ['Beginner', 'Conversation'],
    info: 'John is an experienced tutor with a passion for teaching languages. As a native English speaker, he excels at helping beginners navigate the complexities of Spanish, ensuring a solid foundation for further learning. His engaging conversation classes are perfect for those looking to improve their speaking skills in a supportive and motivating environment.',
    image: 'JohnDoe.jpg',
    classes: [
        { level: 'Beginner', day: 'Tuesday', time: '6pm to 7pm' },
        { level: 'Conversation', day: 'Sunday', time: '3pm to 4pm' }
    ]
},
{
  name: 'Maria Garcia',
  nativeLanguage: 'Spanish',
  level: ['Intermediate', 'Conversation'],
  info: 'Maria is a professional language tutor with years of experience in teaching Spanish. She specializes in guiding intermediate learners towards fluency and confidence. Her conversation classes are immersive and interactive.',
  image: 'MariaGarcia.jpg',
  classes: [
      { level: 'Intermediate', day: 'Wednesday', time: '5pm to 6pm' },
      { level: 'Conversation', day: 'Saturday', time: '2pm to 3pm' }
  ]
},
  {
      name: 'Pierre Dupont',
      nativeLanguage: 'English',
      level: ['Advanced', 'Conversation'],
      info: 'Pierre is a language enthusiast and experienced tutor who loves helping advanced students perfect their Spanish skills. With a strong command of both English and Spanish, he offers challenging conversation classes that push learners to achieve their highest potential. His dynamic teaching style makes every session both enjoyable and educational.',
      image: 'PierreDupont.jpg'
  },
  {
      name: 'Belen Rueda',
      nativeLanguage: 'Spanish',
      level: ['Conversation'],
      info: 'Belen is a passionate language enthusiast and experienced tutor dedicated to helping students improve their Spanish conversation skills. As a native Spanish speaker, she provides an authentic learning experience that focuses on practical communication and cultural understanding. Her friendly and approachable teaching style ensures that students feel comfortable and confident while speaking Spanish.',
      image: 'BelenRueda.jpg'
  },
  {
      name: 'Carmen Maura',
      nativeLanguage: 'Spanish',
      level: ['Conversation','Intermediate'],
      info: 'Carmen is a dedicated and experienced tutor with a deep love for the Spanish language. Her conversation classes are ideal for students who want to practice and enhance their speaking abilities in a natural, engaging setting. With her native proficiency and warm teaching approach, Carmen helps students gain the confidence and skills needed to communicate effectively in Spanish.',
      image: 'CarmenMaura.jpg'
  },
  
  {
    name: 'Pepita Pulgarcita',
    nativeLanguage: 'Spanish',
    level: ['Conversation','Beginner','Intermediate'],
    info: 'Carmen is a dedicated and experienced tutor with a deep love for the Spanish language. Her conversation classes are ideal for students who want to practice and enhance their speaking abilities in a natural, engaging setting. With her native proficiency and warm teaching approach, Carmen helps students gain the confidence and skills needed to communicate effectively in Spanish.',
    image: 'CarmenMaura.jpg'
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

// Array to bring up tutors details in book a class



function showAvailableTutors() {
  const level = document.getElementById('tutorLevel').value;
  const resultsContainer = document.getElementById('tutorResults');
  resultsContainer.innerHTML = '';

  if (level) {
      const availableTutors = tutors.filter(tutor => tutor.level.includes(level));

      if (availableTutors.length === 0) {
          resultsContainer.innerHTML = '<p>No tutors available for this level.</p>';
      } else {
          availableTutors.forEach(tutor => {
              const tutorDiv = document.createElement('div');
              tutorDiv.classList.add('tutor');
              
              let classesHtml = '';
              tutor.classes.forEach(classInfo => {
                  if (classInfo.level === level) {
                      classesHtml += `
                          <p><strong>Class:</strong> ${classInfo.level} on ${classInfo.day}</p>
                          <p><strong>Time:</strong> ${classInfo.time}</p>
                          <button class="book-button" onclick="bookClass('${tutor.name}', '${classInfo.level}', '${classInfo.day}', '${classInfo.time}')">Book</button>
                      `;
                  }
              });

              tutorDiv.innerHTML = `
                  <h2>Tutor's Name: ${tutor.name}</h2>
                  <p>Native Language: ${tutor.nativeLanguage}</p>
                  <p>Information about the Tutor: ${tutor.info}</p>
                  <div class="tutor-image-container">
                    <img src="images/${tutor.image}" alt="${tutor.name}">
                  </div>
                  <div class="class-details">
                    ${classesHtml || '<p>No classes available for this level.</p>'}
                  </div>
              `;

              resultsContainer.appendChild(tutorDiv);
          });
      }
  }
}

function bookClass(tutorName, level, day, time) {
    try {
        alert(`You have successfully booked a ${level} class with ${tutorName} on ${day} at ${time}.`);
        // Stop here as we only need to show the confirmation message
    } catch (error) {
        console.error("Booking simulation error:", error); // Log error if any unexpected issue arises
    }
}
