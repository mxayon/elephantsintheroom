
#Elephants In the Room
### [Elephants In The Room](https://elephantsintheroom.herokuapp.com/)
**currently still in demo mode. if you are a developer and need to look at code please keep in mind that TagWords on nav bar are hard coded in with tagword Ids and using a joint table to pull down articles associated through articletagwords table. Hard coded in app.js**

* Inspired by how the news feed on facebook can tend to be one sided, click bait-y and lacking of facts. As well as how it is the most commonly used platform people use as a main news resource.

Elephants in the Room hopes to centralize a database of articles that may be difficult to discuss but important to humanity.

Aside from Major Issues, ETR offers 3 categories of solution articles: Communication, Culture and Connection, in which empathy is demonstrated or defined.

Elephants in the Room is not meant to filter news but as a platform to present and brainstorm for solutions.

While looking for accurate ways to fairly rate and categorize articles, I came across
 >http://hedonometer.org

- an instrument that measures the happiness of large populations in real time. It uses online expressions from Twitter posts measured over time in real life events.

Based on the way Hedonometer ranked each word to a happiness score:
 >http://hedonometer.org/words.html

- that proves how the suggestiveness of words can sway the emotions of the reader. Subtly influencing once opinions before confirming with facts.

Across cultures, the commitment to happiness is a more of a western concept.
> https://hbr.org/2012/01/the-history-of-happiness

As most cultures embrace an aversion to happiness and find harmony and balance to be more important.
>http://phys.org/news/2014-03-cultures-differ-happiness-beliefs.html

Elephants in the Room tries to crush any sadness aversion bias, by facing the sad news in life instead of avoiding it. The idea of presenting Communication, Culture and Connection articles hopes to guide the processing of these sad facts into acceptance and a drive to find solutions.



## Technologies Used
HTML, CSS
JavaScript, jQuery
HandlebarsJS, Bootstrap
Express, Mongoose, MongoDB


### ![elephantsintheroom:](http://i.imgur.com/B2b6s8F.png "elephants")

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
Google Maps integration
Admin User
