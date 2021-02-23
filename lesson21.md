<!-- .slide: id="lesson21" -->

# Basic Frontend - Fall 2020

Lesson 21, Thursday, 2020-11-12

---

“If I have seen further it is by standing on the shoulders of Giants.”

--Isaac Newton

---

### Libraries

* Up until now, this was our standard pattern:

```html
<html>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

All our JavaScript code was in one file called `main.js`

---

### Libraries

<!-- .slide: id="lesson21:Libraries" -->

What is a library?

* General definiton: A collection of resources used for software development
* More specifically, libraries also usually relate to one specific type of functionality that you require for your app to function that (usually) someone else has written.
* Examples: moment.js, Plotly, Leaflet

---

### Multiple scripts

* We can add as many scripts (libraries) as we want:

```html
<html>
  <body>
    <script src="utilities.js"></script>
    <script src="recipes.js"></script>
    <script src="main.js"></script>
  </body>
</html>
```

* This allows us to split long scripts into pieces

---

### Multiple scripts

* If we have multiple script tags, we can use all global variables and global functions from all scripts that came _before_ our script.
* Scripts are run in order!
* In the example on the last slide, `recipes.js` can use all globals from `utilities.js`, and `main.js` can use all globals from `recipes.js` and `utilities.js`

---

### Scripts in header vs. body

* We put our _own_ scripts at the bottom of the `<body>` tag
* This allows us to access all HTML elements via DOM API
* We can put scripts also in the `<head>` tag. These are loaded _before_ the page is rendered:

```html
<html>
  <head>
    <script src="utilities.js"></script>
  </head>
  <body>
    <div id="myDiv">
      <!-- Elements go here -->
    </div>
    <script src="main.js"></script>
  </body>
</html>
```

---

### Remote scripts

* So far, we loaded scripts only from our local file system
* However, scripts can also be remote addresses. In the example below, we load the `plotly.js` library:

```html
<html>
  <head>
      <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
  </head>
</html>
```

---

### Plotly

* Plotly is a graphing library
* It is Open Source (MIT license)
* When we load `plotly-latest-min.js`, we have access to a single global object called `Plotly`
* Documentation: https://plotly.com/javascript/getting-started/


---

### Plotly example

```html
<html>
  <head>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
  </head>
  <body>
    <div id="myGraph"></div>
    <script>
      const dataSet1 = {
        x: [1,  2, 3,  4],
        y: [0, 12, 8, 17],
        type: 'scatter'
      };

      Plotly.newPlot('myGraph', [dataSet1]);
    </script>
  </body>
</html>
```

Adapted from: https://plotly.com/javascript/line-charts/

---

### Plotly Exercise

Use Plotly to graph the last 10 years of population data from 2 countries of your choice.

I'm using this data source: https://www.macrotrends.net/countries/DEU/germany/population

Have extra time? Add labels to the x and y axis.

---

### Plotly Exercise #2

Create a bar graph of age by population group, similar to https://www.statista.com/statistics/454349/population-by-age-group-germany/

Each bar starting at the x axis should represent an age range of whatever you find.

---