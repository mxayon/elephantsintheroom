
##Elephants In the Room
**** currently still in demo mode. if you are a developer and need to look at code please keep in mind that TagWords on nav bar are hard coded in with tagword Ids and using a joint table to pull down articles associated through articletagwords table. Hard coded in app.js ***********

Elephants in the room is an article database that tries to cover all hard hitting issues.
Categories or TagWords are cut down to 4 classifications.
Major Issues, Communication, Culture and Connection.
Based on an article for social change (included in the articles), and the Three C's that can change the world.


### Technologies Used
JAVASCRIPT
jQuery
Mongoose, MongoDB
handlebarsJS
HTML / CSS
Bootstrap : Media thumbnails, grid system


heroku project link : https://frozen-plains-43549.herokuapp.com/

![elephantsintheroom:](http://imgur.com/B2b6s8F)

USER LANDS ON LANDING PAGE
- User is greeted Articles and Navigation Bar located on the top.
- if user clicks on TAG WORDS tab they will be redirected to all the articles categorized tag words.
- if user clicks on submit an article button they will be directed to the part of the page where there is a form available for filling out a new article.
- user can choose category or tagword in the dropdown menu provided in form.


### Existing Features
Utilizing RESTful routes
Using Mongoose to create two databases (articles and tag words) and a joint table to to join them.
Using Ajax request and assigning event listeners
Single page app that uses jquery and handlebars templating to load more articles
Add and delete articles from the Elephants database of articles.
Show articles by "tagword" category.
Full Crud on Both databases. Joint table can index and create.
Easy management of articles and and tagwords through joint table.

#### Planned Features
Elephants high hopes is to have a "restore faith in humanity button" based on a compassionScale hard coded in an articles schema.
And google maps integration when you click on an article, you can see all the hopeful and compassionate articles around it.


USER LANDS ON MAP PAGE
- Map loads with pin of current article.
- user will have a "restore faith in humanity" articles and will see compassionate articles around it based on a compassionScale that is set for each article.




Project was partly inspired by and online Hedonometer.
http://hedonometer.org/index.html
Which gives a visual image of the worlds happiness and sadness based on twitter hashtags and current events.





Google Maps API
Hedonometer API
