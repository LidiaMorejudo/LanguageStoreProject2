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









