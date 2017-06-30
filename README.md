# Welcome to the MockNews.com Project!

This site will interface with https://newsapi.org/ to display news from various resources.

## Technologies

* Ember
* Mirage
* SCSS
* CircleCi
* AWS LightSail

## Installation

* `git clone <repository-url>` this repository
* `cd mock-news-ember`
* `npm install`
* `bower install`

## Running / Development

* To run the app with mirage: `ember serve` (Recommended to see basic functionality)
* To run the app with the live api: `ember serve --proxy "https://newsapi.org"`
  Note: you will have to get an API key from https://newsapi.org/register and put that API key as a header in app/adapters/application.js
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

## Features

Currently there are two reusable components:

### mne-story-list
This component accepts a news source and a title and displays a list of stories from that news source.
Current available models:
* buzzFeed
* nextWeb
* reuters
* associatedPress

Usage: `{{mne-story-list model=buzzFeed title="Top News from BuzzFeed"}}`

### mne-image-list
This component accepts a news source and a title and displays a list of stories with imagesfrom that news source.
Available models are the same as mne-story list.
Usage: `{{mne-image-list model=buzzFeed title="Top News from BuzzFeed"}}`
