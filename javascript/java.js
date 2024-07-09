// Array of month names
const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

// Array of days in each month for the year 2025
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Lessons and their days
const lessons = {
    "Tuesday": "Beginners",
    "Wednesday": "Intermediate",
    "Thursday": "Advanced",
    "Sunday": "Conversation"
};

// Initial month index
let currentMonthIndex = new Date().getMonth();

// Get references to the DOM elements
const monthDisplay = document.getElementById('month-display');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const tableCells = document.querySelectorAll('#timetable tbody td');

// Function to update the month display and fill the dates
function updateCalendar() {
    monthDisplay.textContent = months[currentMonthIndex];
    
    // Clear all cells
    tableCells.forEach(cell => cell.textContent = '');
    
    // Get the first day of the current month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const firstDay = new Date(2025, currentMonthIndex, 1).getDay();
    const daysInCurrentMonth = daysInMonth[currentMonthIndex];

    // Adjust for calendar starting on Monday: 0 (Sunday) -> 6 (Saturday)
    const adjustedFirstDay = (firstDay === 0) ? 6 : firstDay - 1;

    // Weekdays mapping to lesson names
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Fill the dates and lessons in the calendar
    let dayCount = 1;
    for (let i = adjustedFirstDay; i < tableCells.length && dayCount <= daysInCurrentMonth; i++) {
    const weekDay = weekDays[i % 7]; // Determine the day of the week for the current cell
    tableCells[i].textContent = dayCount;
    
    // Check if there's a lesson on this day
    if (lessons[weekDay]) {
        tableCells[i].innerHTML += `<br>${lessons[weekDay]}`;
        }
            dayCount++;
        }
    }


// Event listeners for buttons
prevButton.addEventListener('click', () => {
    currentMonthIndex = (currentMonthIndex === 0) ? 11 : currentMonthIndex - 1;
    updateCalendar();
});

nextButton.addEventListener('click', () => {
    currentMonthIndex = (currentMonthIndex === 11) ? 0 : currentMonthIndex + 1;
    updateCalendar();
});

// Initialize the display
updateCalendar();

// Array of lesson names
const lesson = [
    "Beginner", "Intermediate", "Advanced", "Conversation"
];

// Finding a tutor page

const tutors = [
    { 
        name: 'Tutor 1', 
        nativeLanguage: 'English', 
        level: ['Beginner', 'Intermediate'], 
        info: 'Experienced tutor...', 
        picture: 'images/tutor1.jpg' 
    },
    { 
        name: 'Tutor 2', 
        nativeLanguage: 'French', 
        level: ['Intermediate', 'Conversation'], 
        info: 'Native French speaker...', 
        picture: 'images/tutor2.jpg' 
    }
];

document.getElementById('tutorSearchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedLanguage = document.getElementById('nativeLanguage').value;
    const selectedLevel = document.getElementById('level').value;

    const filteredTutors = tutors.filter(tutor => {
        const matchesLanguage = selectedLanguage === '' || tutor.nativeLanguage === selectedLanguage;
        const matchesLevel = selectedLevel === '' || tutor.level.includes(selectedLevel);
        return matchesLanguage && matchesLevel;
    });

    displayTutors(filteredTutors);
});

function displayTutors(tutors) {
    const resultsContainer = document.getElementById('tutorResults');
    resultsContainer.innerHTML = '';

    if (tutors.length === 0) {
        resultsContainer.innerHTML = '<p>No tutors found</p>';
        return;
    }

    tutors.forEach(tutor => {
        const tutorCard = document.createElement('div');
        tutorCard.classList.add('tutor-card');

        const tutorImage = document.createElement('img');
        tutorImage.src = tutor.picture;
        tutorImage.alt = tutor.name;

        const tutorInfo = document.createElement('div');
        tutorInfo.innerHTML = `
            <h3>${tutor.name}</h3>
            <p><strong>Native Language:</strong> ${tutor.nativeLanguage}</p>
            <p><strong>Levels:</strong> ${tutor.level.join(', ')}</p>
            <p>${tutor.info}</p>
        `;

        tutorCard.appendChild(tutorImage);
        tutorCard.appendChild(tutorInfo);

        resultsContainer.appendChild(tutorCard);
    });
}
