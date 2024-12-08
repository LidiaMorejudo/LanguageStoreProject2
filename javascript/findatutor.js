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
        { level: 'Beginner', day: 'Tuesday', time: '3pm to 4pm' },
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
      image: 'PierreDupont.jpg',
      classes: [
        { level: 'Advanced', day: 'Thursday', time: '5pm to 6pm' },
        { level: 'Conversation', day: 'Saturday', time: '1pm to 2pm' }
    ]
  },
  {
      name: 'Belen Rueda',
      nativeLanguage: 'Spanish',
      level: ['Conversation'],
      info: 'Belen is a passionate language enthusiast and experienced tutor dedicated to helping students improve their Spanish conversation skills. As a native Spanish speaker, she provides an authentic learning experience that focuses on practical communication and cultural understanding. Her friendly and approachable teaching style ensures that students feel comfortable and confident while speaking Spanish.',
      image: 'BelenRueda.jpg',
      classes: [
        { level: 'Conversation', day: 'Saturday', time: '5pm to 6pm' },
        { level: 'Conversation', day: 'Saturday', time: '1pm to 2pm' }
    ]
  },
  {
      name: 'Carmen Maura',
      nativeLanguage: 'Spanish',
      level: ['Conversation','Intermediate'],
      info: 'Carmen is a dedicated and experienced tutor with a deep love for the Spanish language. Her conversation classes are ideal for students who want to practice and enhance their speaking abilities in a natural, engaging setting. With her native proficiency and warm teaching approach, Carmen helps students gain the confidence and skills needed to communicate effectively in Spanish.',
      image: 'CarmenMaura.jpg',
      classes: [
        { level: 'Conversation', day: 'Saturday', time: '3pm to 4pm' },
        { level: 'Conversation', day: 'Saturday', time: '2pm to 3pm' },
        { level: 'Intermediate', day: 'Wednesday', time: '2pm to 3pm' }        
    ]
  },

  {
    name: 'Elena Rodriguez',
    nativeLanguage: 'English',
    level: ['Beginner', 'Intermediate', 'Advanced', 'Conversation'],
    info: 'Elena is a passionate and experienced tutor who specializes in building a strong foundation for beginners, guiding intermediates towards fluency, and challenging advanced learners to achieve excellence. Her interactive conversation classes focus on real-life scenarios, ensuring her students feel confident speaking Spanish in any situation.',
    image: 'elenarodriguez.png',
    classes: [
      { level: 'Beginner', day: 'Tuesday', time: '9am to 10am' },
      { level: 'Intermediate', day: 'Wednesday', time: '10am to 11am' },
      { level: 'Advanced', day: 'Thursday', time: '11am to 12pm' },
      { level: 'Conversation', day: 'Sunday', time: '4pm to 5pm' }
    ]
  },

  {
    name: 'Miguel Sanchez',
    nativeLanguage: 'Spanish',
    level: ['Beginner', 'Intermediate', 'Advanced', 'Conversation'],
    info: 'Miguel brings years of teaching expertise to his classes, which are tailored to suit each student’s learning needs. He excels at helping beginners gain confidence, intermediates refine their skills, and advanced learners perfect their Spanish. His lively conversation classes are a favorite among his students.',
    image: 'miguelsanchez.png',
    classes: [
      { level: 'Beginner', day: 'Tuesday', time: '11am to 12pm' },
      { level: 'Intermediate', day: 'Wednesday', time: '1pm to 2pm' },
      { level: 'Advanced', day: 'Thursday', time: '3pm to 4pm' },
      { level: 'Conversation', day: 'Sunday', time: '5pm to 6pm' }
    ]
  },

  {
    name: 'Isabel Morales',
    nativeLanguage: 'Spanish',
    level: ['Beginner', 'Intermediate', 'Advanced', 'Conversation'],
    info: 'Isabel is a highly skilled language tutor who enjoys helping students of all levels master Spanish. She creates a positive learning environment where beginners feel encouraged, intermediates are motivated, and advanced learners are challenged. Her conversation classes emphasize cultural context and practical fluency.',
    image: 'isabelmorales.png',
    classes: [
      { level: 'Beginner', day: 'Tuesday', time: '2pm to 3pm' },
      { level: 'Intermediate', day: 'Wednesday', time: '3pm to 4pm' },
      { level: 'Advanced', day: 'Thursday', time: '4pm to 5pm' },
      { level: 'Conversation', day: 'Sunday', time: '6pm to 7pm' }
    ]
  },

  {
    name: 'Luis Fernandez',
    nativeLanguage: 'Spanish',
    level: ['Beginner', 'Intermediate', 'Advanced', 'Conversation'],
    info: 'Luis is an engaging and dynamic tutor who loves sharing his knowledge of Spanish with learners of all levels. His classes are interactive and personalized, designed to help beginners get started, intermediates progress, and advanced students excel. His conversation classes are particularly focused on everyday communication.',
    image: 'luisfernandez.png',
    classes: [
      { level: 'Beginner', day: 'Tuesday', time: '3pm to 4pm' },
      { level: 'Intermediate', day: 'Wednesday', time: '4pm to 5pm' },
      { level: 'Advanced', day: 'Thursday', time: '5pm to 6pm' },
      { level: 'Conversation', day: 'Sunday', time: '7pm to 8pm' }
    ]
  },  
  
  {
    name: 'Pepita Pulgarcita',
    nativeLanguage: 'Spanish',
    level: ['Conversation','Beginner','Intermediate'],
    info: 'Pepita Pulgarcita is a dedicated and experienced tutor with a deep love for the Spanish language. Her conversation classes are ideal for students who want to practice and enhance their speaking abilities in a natural, engaging setting. With her native proficiency and warm teaching approach, Carmen helps students gain the confidence and skills needed to communicate effectively in Spanish.',
    image: 'pepitapulgarcita.png',
    classes: [
      { level: 'Beginner', day: 'Tuesday', time: '3pm to 4pm' },
      { level: 'Beginner', day: 'Tuesday', time: '1pm to 2pm' },
      { level: 'Conversation', day: 'Saturday', time: '2pm to 3pm' },
      { level: 'Intermediate', day: 'Wednesday', time: '2pm to 3pm' }        
  ]
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
              <h2>Tutor's name: <strong>${tutor.name}</strong></h2>
              <p>Native language: <strong>${tutor.nativeLanguage}</strong></p>
              <p>Level taught: <strong>${tutor.level.join(', ')}</strong></p>
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
    // Create a confirmation message with the booking details
    const confirmationMessage = `
        Thank you for your booking.
        The office will contact you with payment details:
        Tutor: ${tutorName}
        Level: ${level}
        Day: ${day}
        Time: ${time}
    `;

    // Display the confirmation message as an alert
    alert(confirmationMessage);
}








