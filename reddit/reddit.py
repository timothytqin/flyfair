#!/usr/bin/env python
# coding: utf-8

import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer as SIA
import praw
import pandas as pd
import json
from flask import Flask, request

app = Flask(__name__)


nltk.download('vader_lexicon')
nltk.download('stopwords')


reddit = praw.Reddit(client_id='CN4F33LP3atBxFBBiLkYDg',
                    client_secret='WajP_aVpMqsTAKZakCdMc0IBho9SNw',
                    user_agent='stevehan2001') ## to use this, make a Reddit app. Client ID is in top left corner, client secret is given, and user agent is the username that the app is under



sub_reddits = reddit.subreddit('wallstreetbets')
# For example purposes. To use this as a live trading tool, you'd want to populate this with tickers that have been mentioned on the pertinent community (WSB in our case) in a specified period.


def commentSentiment(urlT):
    subComments = []
    bodyComment = []
    try:
        check = reddit.submission(url=urlT)
        subComments = check.comments
    except:
        return 0
    
    for comment in subComments:
        try: 
            bodyComment.append(comment.body)
        except:
            return 0
    
    sia = SIA()
    results = []
    for line in bodyComment:
        scores = sia.polarity_scores(line)
        scores['headline'] = line

        results.append(scores)
    
    df =pd.DataFrame.from_records(results)
    df.head()
    df['label'] = 0
    
    try:
        df.loc[df['compound'] > 0.1, 'label'] = 1
        df.loc[df['compound'] < -0.1, 'label'] = -1
    except:
        return 0
    
    averageScore = 0
    position = 0
    while position < len(df.label)-1:
        averageScore = averageScore + df.label[position]
        position += 1
    averageScore = averageScore/len(df.label) 
    
    return(averageScore)

@app.route('/')
def getRedditSentiment():
    print('route accessed')
    ticker = request.args.get('ticker')
    results = []
    for submission in reddit.subreddit('wallstreetbets').search(ticker, limit=10):
        if submission.domain != "self.wallstreetbets":
            continue
        d = {}
        d['num_comments'] = submission.num_comments
        d['comment_sentiment_average'] = commentSentiment(submission.url)
        print(d['comment_sentiment_average'])
        if d['comment_sentiment_average'] == 0.000000:
            continue
        d['upvote_ratio'] = submission.upvote_ratio
        d['date'] = submission.created_utc
        results.append(d)
    print(results)
    return {'result': results}

data = {}
for ticker in ['GS', 'IBM', 'W', 'COF', 'GOOGL', 'AAPL', 'AMZN', 'TSLA', 'AAL', 'NFLX']:
    results = []
    for submission in reddit.subreddit('wallstreetbets').search(ticker, limit=10):
        if submission.domain != "self.wallstreetbets":
            continue
        d = {}
        d['num_comments'] = submission.num_comments
        d['comment_sentiment_average'] = commentSentiment(submission.url)
        if d['comment_sentiment_average'] == 0.000000:
            continue
        d['date'] = submission.created_utc
        d['link'] = submission.url
        print(d['link'])
        d['title'] = submission.title
        results.append(d)
    data[ticker] = results

with open('data.json', 'w') as outfile:
    json.dump(data, outfile)



# submission_statistics = []
# d = {}
# stocks = ["GS"] 
# for ticker in stocks:
#     for submission in reddit.subreddit('wallstreetbets').search(ticker, limit=10):
#         if submission.domain != "self.wallstreetbets":
#             print(submission.domain)
#             continue
#         d = {}
#         d['num_comments'] = submission.num_comments
#         d['comment_sentiment_average'] = commentSentiment(submission.url)
#         print(d['comment_sentiment_average'])
#         if d['comment_sentiment_average'] == 0.000000:
#             print('average is 0')
#             continue
#         d['upvote_ratio'] = submission.upvote_ratio
#         d['date'] = submission.created_utc
#         d['author'] = submission.author
#         submission_statistics.append(d)
