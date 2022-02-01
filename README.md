# Movie_Application
A machine learning, JavaScript, and SQLite similar movie suggestion application.

## Overview
The objective is to make a lightweight app that can be hosted on GitHub pages that provides a list of movies that might be of interest for viewing upon giving an example movie of interest.  The dataset to be used is the (ml-25m) which has movie ratings and free-text tagging scores.  This dataset come from [MovieLens](http://movielens.org), a movie recommendation service. 

https://grouplens.org/datasets/movielens/25m/


## Team Member Communication Protocol
Slack Team 06-Purple Channel will be used for communication between team members

## Individual Branches and Targeted Technology

1. Database 
   - SQLite to hold machine learning output, movie links, and ratings summary data for use in the app.
2. Machinelearning 
   - KMeans clustering leveraging genome-scores
3. Visualizationapp
   - D3 JavaScript providing user interaction and SQLite database queries.

## Movie Genome Scoring Tag Correlation
There are over 1000 user comment tags that were scored with a relevance by movielens group against each movie.  It is desired to leverage this scoring to find movies that are similar in tagging.  The movies could then be clustered by tag scoring using a KMeans machine learning algorithm. As a first step it was desired to plot similar movies for all genome tag relevance scores for a visual correlation.  As seen in the below graph a correlation does exist and is stronger for movies that are more similar.

![alt text](https://github.com/jj2773/Movie_Application/blob/main/Resources/readme_correl.png)



Citation
========

To acknowledge use of the dataset in publications, please cite the following paper:

> F. Maxwell Harper and Joseph A. Konstan. 2015. The MovieLens Datasets: History and Context. ACM Transactions on Interactive Intelligent Systems (TiiS) 5, 4: 19:1–19:19. <https://doi.org/10.1145/2827872>