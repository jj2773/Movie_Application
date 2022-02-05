-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
CREATE TABLE "movies" (
    "movieid" int   NOT NULL,
    "title" text   NOT NULL,
    "genres" text   NOT NULL,
    CONSTRAINT "pk_movies" PRIMARY KEY (
        "movieid"
     )
);

CREATE TABLE "genome_scores" (
    "movieid" int   NOT NULL,
    "tagid" int   NOT NULL,
    "relevance" numeric   NOT NULL
);

CREATE TABLE "ratings" (
    "userid" int   NOT NULL,
    "movieid" int   NOT NULL,
    "rating" numeric   NOT NULL,
    "timestamp" bigint   NOT NULL
);

CREATE TABLE "genome_tags" (
    "tagid" int   NOT NULL,
    "tag" text   NOT NULL,
    CONSTRAINT "pk_genome_tags" PRIMARY KEY (
        "tagid"
     )
);

ALTER TABLE "genome_scores" ADD CONSTRAINT "fk_genome_scores_movieid" FOREIGN KEY("movieid")
REFERENCES "movies" ("movieid");

ALTER TABLE "genome_scores" ADD CONSTRAINT "fk_genome_scores_tagid" FOREIGN KEY("tagid")
REFERENCES "genome_tags" ("tagid");

ALTER TABLE "ratings" ADD CONSTRAINT "fk_ratings_movieid" FOREIGN KEY("movieid")
REFERENCES "movies" ("movieid");

CREATE INDEX "idx_movies_title"
ON "movies" ("title");
