# Feature-Express

Feature-Express is simple way to expose your features in a beatifull html.


![CircleCI branch](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser/master.svg?style=for-the-badge)
![npm](https://img.shields.io/npm/v/npm.svg?style=for-the-badge)


## View Sample

![sample](./assets/images/feature-express-sample.png  "Feature-Express View Sample")

# Usage

## To install
```
$ npm install -g feature-express
```
## Running Tips  
* With this command the server start at port 3000 and gherkin language English
```
$ feature-express ./YOUR-FEATURES-FOLDER/ 
```
* If you need a specific gherkin language and a different port send it in that order :
 ```
 $ feature-express ./YOUR-FEATURES-FOLDER/ pt 4444
 ```
 ## See your Features on HTML
After running the command, your console will generate a url to see your features **"Feature-Express is running at http://localhost:4444/"**
# Laguage

* Express-Feature only support portuguese and english language at the moment.
* To add a new laguages options add an object to this enum file **language.js** , and send your pull request.

# License

Copyright © 2018 Leonardo Menezes, leonardosmenezes.ssz@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.