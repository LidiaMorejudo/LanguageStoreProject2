# LanguageStoreProject2

PURPOSE OF THE WEBSITE

The purpose of this website "Language Store" is to promote the Spanish language teaching services of a group of teachers. The website has information about the tutors and the lessons available. Lessons can also be booked through it. 

VALUE FOR THE USERS

Current students can use the website to contact the school or their tutor, and also to book more lessons. People who are interested in learning Spanish as a foreign language cand find information about the lessons delivered, as well as a bit more about the teachers' background. This can help them decide if they want to learn Spanish with this school or not.

On the find classes page, there is some information regarding the school, and also a calendar showing the dates for regular sessions throughout the year 2025. The functionality of this calendar was built using CSS for the design and javascript to make the days and months match with the right date. 

PLANNING 

Home Page WIREFRAMES

This is the wireframe for the front page. Showing the icon and the title, wiht game for the Snowman to make the page more attractive to prospective students.

![ Wireframes Home Page](/images/wireframehomepage.png)

An issue I encountered while building this project, is that although the calendar worked, when I was trying to use javascript for another part, the submit button of the contact form this did not work. The idea is that when clicking submit a thank you message would come up. When trying to build this functionality, it did not work. The message was that the button did not exist. I reached out to a tutor from the Code Institute, who suggested this was because there was a conflict in the javascript code, because it was all on one file. I took up her suggestion to create different files for the different javascript functionalities, and naming them to match the with the page they go with. This seemed to fix the issue. 

Another constant issue I've been having with any project on Gitpod is that quite often the commands to commit changes won't work. The only way to sort his is clearing cache and realoading, although sometimes I have to do this 2 or 3 times for it to work. This is a big issue as it interrups the flow, and sometimes I can't commit till the next day, with the danger of "forgetting" what all the changes were.

Melting Snowman: I decided to include a game on the site linked to Spanish learning, as a way to attract new students and to show that our classes are fun. I used https://www.freecodecamp.org/news/how-to-code-a-simple-game/ as a base for this game.