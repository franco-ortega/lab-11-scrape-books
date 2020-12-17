# README

## Lab Instructions

https://github.com/alchemycodelab/alchemy-fsjs-december-2020/tree/main/11_scraping/lab


## Setup

1. *mkdir lab-11-scrape-books*

1. *cd lab-11-scrape-books*

1. *npm init @alchemycodelab/app@latest*
    1. Application Type // sql only
    1. Application Folder // select . to add this to existing folder
    1. Application Name // lab-11-scrape-books

1. *code .*

1. Create main branch:
    1. *git checkout -b main*

1. *npm i node-fetch*

1. *npm i jsdom*

1. Create README.md

1. Create .env
    1. postgres login

1. Connect to pgAdmin

1. Create remote repo on GitHub
    1. Repo name: lab-11-scrape-books
    1. Public
    1. No README, .gitignore, or license
    1. Copy repo link

1. Add remote repo to local repo:
    1. *git remote add origin https://github.com/franco-ortega/lab-11-scrape-books.git*

1. ACP:
    1. *git add -A*
    1. *git commit -m 'add initial commit to main'*
    1. *git push origin main*

1. Create dev branch:
    1. *git checkout -b dev*

1. Create folders & files:
    1. **lib**
        1. app.js
        1. request.js
        1. parser.js
        1. store.js
        1. scraper.js
    1. **models**
        1. Book.js
    1. **sql**
        1. setup.sql
1. ACP to dev branch
    1. *git add -A*
    1. *git commit -m 'add initial files and folders'*
    1. *git push -u origin dev*



## Overview

1. Setup

1. Create books table in setup.sql
    1. id (number)
    1. title (text)
    1. cover_image (text?)
    1. rating (text)
    1. price (text)
    1. in_stock (boolean)

1. Create Book model in Book.js
    1. constructor
    1. create/POST - insert()
    1. read/GET - find() & findById()

1. Create request.js
    1. makes request
    1. returns a promise

1. Create parser.js
    1. takes a document
    1. find all books
    1. return array of books

1. Create store.js
    1. takes an array of books
    1. stores each book in postgres

1. Create scraper.js
    1. use request(), parser(), and store() to store an array of books
    1. console the books