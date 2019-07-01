
## [Elephants In The Room](https://elephantsintheroom.herokuapp.com/)

---

This is an article database that aims to decentralize any news bubbles caused by the previous social media
algorithms.

Elephants in the Room hopes to involve and share issues across communities.

Aside from Major Issues, ETR offers 3 categories of solution articles: Communication, Culture and Connection, in which empathy is demonstrated or defined.

Elephants in the Room is not meant to censor news but as a platform to present and brainstorm for solutions.

***

[Hedonometer](http://hedonometer.org) is an interesting project that uses data science to measure the happiness of large populations in real time. It uses online expressions from hashtags measured over time in real life events.

[Hedonometer - Words](http://hedonometer.org/words.html) shows frequently used words and the feelings they imply.


Through studying the ["History of happiness"](https://hbr.org/2012/01/the-history-of-happiness) we know that this gauge maybe subjective to the west.

As most cultures embrace an aversion to happiness and find harmony and balance to be more important.
["Cultures differ happiness beliefs"](http://phys.org/news/2014-03-cultures-differ-happiness-beliefs.html)

Elephants in the Room tries to crush any sadness aversion bias, by facing the sad news in life instead of avoiding it. The idea of presenting Communication, Culture and Connection articles hopes to guide the processing of these sad facts into acceptance and a drive to find solutions.


## [Elephants In The Room](https://elephantsintheroom.herokuapp.com/)
![elephantsintheroom:](http://i.imgur.com/B2b6s8F.png "elephants")

## User Journey:
- User is greeted Articles and Navigation Bar located on the top.
- If user clicks on TAG WORDS tab they will be redirected to all the articles categorized tag words.
- If user clicks on submit an article button they will be directed to the part of the page where there is a form available for filling out a new article.
- User can choose category or TagWord in the dropdown menu provided in form.


## Technologies Used
HTML, CSS
JavaScript, jQuery
HandlebarsJS, Bootstrap
Express, Mongoose, MongoDB


### Database Set-Up

Entity Relationship Diagram

![E.R - ERD](https://i.ibb.co/yWVCN5P/er-erd.png)



## Existing Features
- [X] Utilizing RESTful routes
- [X] Using Mongoose to create two databases (articles and tag words) and a join table to to join them.
- [X] Using Ajax request and assigning event listeners
- [X] Single page app that uses jquery and handlebars templating to load more articles
- [X] Add and delete articles from the Elephants database of articles.
- [X] Show articles by "tagword" category.
- [X] Full Crud on Both databases. Join table can index and create.
- [X] Easy management of articles and and tagwords through join table.

### Planned Features
- [ ] Google Maps integration
- [ ] Admin User
