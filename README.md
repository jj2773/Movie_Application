# Movie_Application
A machine learning, JavaScript, SQLite movie similar movie suggestion application.

## Overview
The objective is to make a lightweight app that can be hosted on GitHub pages that provides a list of movies that might be of interest for viewing upon giving an example movie of interest.  The dataset to be used is the (ml-25m) which has movie ratings and free-text tagging scores.  This dataset come from [MovieLens](http://movielens.org), a movie recommendation service. 

https://grouplens.org/datasets/movielens/25m/


## Team Member Communication Protocol
Slack Team 06-Purple Channel will be used for communication between team members

## Individual Branches and Targeted Technology
Main
    -- Database 
            SQLite to hold machine learning output, movie links, and ratings summary data for use in the app.
    -- Machinelearning 
            KMeans clustering leveraging genome-scores
    -- Visualizationapp
            D3 JavaScript providing user interaction and SQLite database queries.



Citation
========

To acknowledge use of the dataset in publications, please cite the following paper:

> F. Maxwell Harper and Joseph A. Konstan. 2015. The MovieLens Datasets: History and Context. ACM Transactions on Interactive Intelligent Systems (TiiS) 5, 4: 19:1–19:19. <https://doi.org/10.1145/2827872>