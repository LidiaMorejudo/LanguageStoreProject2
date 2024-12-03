# LanguageStoreProject2

PURPOSE OF THE WEBSITE for the teachers running The Language Store

The purpose of this website "Language Store" is to promote the Spanish language teaching services of a group of teachers. The website has information about the tutors and the lessons available. Lessons can also be booked through it.

VALUE FOR THE PROSPECTIVE USERS

Current students can use the website to contact the school or their tutor, and also to book more lessons. People who are interested in learning Spanish as a foreign language can find information about the lessons delivered, as well as a bit more about the teachers' background. This can help them decide if they want to learn Spanish with this school or not.

On the find classes page, there is some information regarding the school, and also a calendar showing the dates for regular sessions throughout the year 2025. The functionality of this calendar was built using CSS for the design and javascript to make the days and months match with the right date. 

PLANNING 

Homepage planning, wireframes, images & Rationnale

The homepage serves like the front door of hte language school. It needs to feel welcoming and attractive to new students. Making them feel like their goal of learning a language is accessible and somehow fun, moving away from old-fashion ways of learning a language. 

This is why a sort of language game was selected for this introduction to the school. The game is based on the popular word game "Hangman". The traditional long sentences of this game have been changed into only words related to the topic of food. The words have been selected for their simplicity, so anybody starting off in the Spanish language would have come accross them already. 

This is the wireframe for the front page. Showing the icon and the title, this version of the hangman game uses snowmen that lose parts if the student makes mistakes.

![ Wireframes Home Page](/images/wireframehomepage.png)

I prepared also the wireframes with the expected look on mobile phones and tablets. In mobile phones the centre text should appear vertically. So, it should narrow on the sides and grow vertically to fit better in the screen and be more readable. On tablets it should appear horizontally as in the computer screen but smaller. 

This are the planning stages for the HOMEPAGE

![ Wireframes Home Page Phones and Tablets](/images/wireframehomepagephonetablet.png)

These are images of how the homepage would appear on different devices:

![ Images of homepage](/images/imageshomepage.png)

Find a Tutor planning, wireframes, images & Rationnale

The second page is a Find a Tutor page. In this page prospective students can peruse the list of tutors. There is a simple form with options to select, native language and level. Selecting the preferred options will bring up the description of the tutor(s) that meet that criteria. The students can then have an idea of the background of the tutors working for the school.

![ Wireframes Find a Tutor](/images/wireframefindatutor.png)

These are the images of how the Find a Tutor page would appear on different devices:

![ Wireframes Find a Tutor](/images/imagesfindatutor.png)

Find Spanish classes online planning, wireframes and images

This page gives general information about the school and the classes, presenting an attractive image, and also provides more specific informationa bout when the classes are.

![ Wireframes Find a Tutor](/images/imagesspanishclassesonline.png)

Scrolling down the page prospective student will see a calendar for next year. This is a 12 month calendar, the user will see the information for one month, but by clicking on the left and right arrows will move to a different month.

![ Wireframes Find a Tutor](/images/wireframespanishclassesonline.png)

Contact WIREFRAMES

Through this page prospective students can get in touch with the team for more information. The form will ask for basic contact information, name, phone number, email, level and there will be a free text box where the prospective student can type in further details or a question they would like answered. 

![ Wireframes Find a Tutor](/images/wireframesgetintouch.png)

The contact page is essential for prospective students to get in touch and find out more about the classes, or clear any doubts they might have. 

![ Wireframes Find a Tutor](/images/imagescontact.png)

Book a class WIREFRAMES

![ Wireframes Find a Tutor](/images/wireframespanishclassesonline.png)

The purpose of this page is to allow prospective students to actively send a booking for their chosen class. They will pick their level and the time. When selecting a level, the options for the times will change to those for that level. 
By clicking on submit the information would be sent to the school and they would get in touch with payment details. The student will see a message explaining this.

![ Wireframes Find a Tutor](/images/imagesbookingalesson.png)

ISSUES

An issue I encountered while building this project, is that although the calendar worked, when I was trying to use javascript for another part, the submit button of the contact form this did not work. The idea is that when clicking submit a thank you message would come up. When trying to build this functionality, it did not work. The message was that the button did not exist. I reached out to a tutor from the Code Institute, who suggested this was because there was a conflict in the javascript code, because it was all on one file. I took up her suggestion to create different files for the different javascript functionalities, and naming them to match the with the page they go with. This seemed to fix the issue. 

Another constant issue I've been having with any project on Gitpod is that quite often the commands to commit changes won't work. The only way to sort his is clearing cache and realoading, although sometimes I have to do this 2 or 3 times for it to work. This is a big issue as it interrups the flow, and sometimes I can't commit till the next day, with the danger of "forgetting" what all the changes were.

Melting Snowman: I decided to include a game on the site linked to Spanish learning, as a way to attract new students and to show that our classes are fun. I used https://www.freecodecamp.org/news/how-to-code-a-simple-game/ as a base for this game.

Tutorial for creating registration forms https://www.tutorialstonight.com/registration-form-in-html#:~:text=Here%20is%20the%20code%20for%20the%20registration%20form,for%3D%22email%22%3EEmail%3A%3C%2Flabel%3E%20%3Cinput%20type%3D%22email%22%20id%3D%22email%22%20name%3D%22email%22%20placeholder%3D%22Your%20email..%22%20required%3E


ISSUE AND CODE TESTING

FINDA A TUTOR PAGE
I added some information in the findatutor javascript file. Specifically, a new tutor and code for also the book a lesson page. However, then the form on the find a tutor page stopped working. It did not display the tutors details. I thought it was because of the added javascript code. However, even when removed it still did not work. After quering with online AI support, the answer was that I had missed a comma between two items of the tutor array. Once this sorted the page worked again.

BOOK A CLASS
When click to select a specific lesson, a message confirming the booking comes up. However, when clicking okay the page threw an error. 