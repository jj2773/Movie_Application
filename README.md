# Movie_Application
Utilizing Machine Learning, JavaScript, PostGres, and SQLite a similar movie suggestion application is developed.

[Google Slides Project Presentation](https://docs.google.com/presentation/d/1zOGgT9MDqIZ27gWdtoPrHMQ59aiYRrBtwYaAyDOytTI/edit?usp=sharing) 

[Java Script Dashboard](https://jj2773.github.io/Movie_Application/) 

[Tableau Dashboard](https://jj2773.github.io/Tableau_Embedded_Dashboard/) 

## Overview
The objective is to make a lightweight app that can be hosted on GitHub pages that provides a list of movies that might be of interest for viewing upon giving an example movie of interest.  The dataset to be used is the (ml-25m) which has movie ratings and free-text tagging scores.  This dataset come from [MovieLens](http://movielens.org), a movie recommendation service. To ensure that this is a valid dataset, the purple team perfomed some correlation analysis as mentioned in "movie genome scoring tag relation". 

https://grouplens.org/datasets/movielens/25m/

## Purpose
The purpose of this app will be to provide list of movies based on the interest of the users. The overall gaol is to configure visualizations based on the genres and clusters dependent on cluster IDs. Additionally, a movie table with user's preferences will be configured as well. A gauge scale will be enabled to allow users to view the ratings based on the genre from their cluster. 

## Questions to Answer
1) Can the purple team use KMeans clustering to predict similar movies to those inputted by the users?
2) Are certain genres rated higher and more popular than others?

## Team Member Communication Protocol
Slack Team 06-Purple Channel will be used for communication between team members

## Individual Branches and Targeted Technology

1. Database 
   - Two databases are leveraged for this project.
      - A PostGres database houses the movielens data which is then pulled into the machine learning workbook.
      - A SQLite database was used to hold the machine learning output, movie links, and ratings summary data for use in the app.
2. Machinelearning 
   - KMeans clustering leveraging genome-scores
3. Visualizationapp
   - D3 JavaScript providing user interaction and SQLite database queries.

## Dataset Details
To ensure movie clustring was accurate, purple team carefully selected datasets that would provide robust movie data to the users. The following datasets were used for purple team's movie applciation:
1) movies.csv- stored movie IDs, titles and genres. This would be the base file for purple team's movie application.
2) genome-score.csv- stored movie ID, tag ID with a relevance to the movie. This dataset makes the purple team's movie application's movie suggestion to its users more robust, as there is a proven correlation between the tag ID and relevance to the movie ID. This means that if the tag ID is 01, representing 007, then the relevance factor in relation to the movie ID is provided on a scale of 0-1. Overall, this makes the movies' data analysis for the movie application statistically significant. 
3) ratings.csv-stored user ID, movie ID and ratings (0-5). This dataset helps in aiding the user's with their decision of viewing the movie suggested by the purple team's movie application. For example, if a suggested movie has a rating of 3, then the users can change their preferences for better movies, if required.
4) links.csv-stored movie ID, IMDB ID, TMDBID. Used to provide links to movie application users, where users can view the trailer as well as what streaming websites are streaming the particular movie. This enhances the usability of the movie application. 

## Movie Genome Scoring Tag Correlation
There are over 1000 user comment tags that were scored with a relevance by movielens group against each movie.  It is desired to leverage this scoring to find movies that are similar in tagging.  The movies could then be clustered by tag scoring using a KMeans machine learning algorithm. As a first step it was desired to plot similar movies for all genome tag relevance scores for a visual correlation.  As seen in the below graph a correlation does exist and is stronger for movies that are more similar.

![alt text](https://github.com/jj2773/Movie_Application/blob/main/Resources/readme_correl.png)



Citation
========
> F. Maxwell Harper and Joseph A. Konstan. 2015. The MovieLens Datasets: History and Context. ACM Transactions on Interactive Intelligent Systems (TiiS) 5, 4: 19:1–19:19. <https://doi.org/10.1145/2827872>

