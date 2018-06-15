# Feature-Express

Feature-Express is simple way to expose your features in a beatifull html.


[![CircleCI](https://circleci.com/gh/menezes-ssz/feature-express.svg?style=svg)](https://circleci.com/gh/menezes-ssz/feature-express)
[![NPM](https://nodei.co/npm/feature-express.png?mini=true)](https://www.npmjs.com/package/feature-express)


## View Sample

![sample](./assets/images/feature-express-sample.png  "Feature-Express View Sample")

# Usage

## To install
```
$ npm install -g feature-express
```
## Running Tips  
* To run feature-express you need to specify gherkin language and a port, send it in that order :
 ```
 $ feature-express ./YOUR-FEATURES-FOLDER/ pt 4444
 ```
 ## See your Features on HTML
After running the command, your console will generate a url to see your features **"Feature-Express is running at http://localhost:4444/"**

## Running with Docker

### To run feature-express docker image on port 3000 and mapping features folder
```
docker pull menezes-ssz/feature-express:latest
docker run -p 3000:3000 -v ABSOULUTE_PATH_FOR_YOUR_FEATURES_FOLDER:/opt/app/features/ menezes-ssz/feature-express
```

### To change PORT and LANG of feature-expresss
```
docker run -p 3000:3001 -e LANG=en -e PORT=3001 -v ABSOULUTE_PATH_FOR_YOUR_FEATURES_FOLDER:/opt/app/features/ menezes-ssz/feature-express
```

# Laguage

* Express-Feature only support portuguese (pt), spanish (es) and english (en) language at the moment.
* To add a new laguages options add an object to this enum file **language.js** , and send your pull request.

# NOTE
* ***IMPORTANT : forking staging branch to send your pull request.***

# License

Copyright © 2018 Leonardo Menezes, leonardosmenezes.ssz@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
