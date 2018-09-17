# save-the-date

Create a calendar to start off the new month!

## Objective

Use **HTML Divs, Headers** and **CSS FlexBox** to create a web calendar!

## Prerequisites

To complete this project, studnets should have the following:
  * Basic understanding of HTML structures and attributes.
  * Basic understanding of CSS Flexbox.

## Concepts

HTML | Description
-----|------------
h1 | The largest header element.
h2 | The 2nd largest header element.
div | A container element.

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:

1. Set up your project file structure through the command line.
2. Create the following:
* HTML file
* CSS file
3. Link all of your files correctly.

### Part II HTML

To complete Part II, fulfill the following requirements:

1. Create a ```div``` with an ```id``` of "container".
  * **Inside** of this div, create the following with the correct indentations:
  * ```div``` with an ```id``` of "title".
    * ```h1``` with text "January".
  * ```div``` with an ```id``` of "days-of-week".
    * ```h2``` with text "M"
    * ```h2``` with text "T"
    * ```h2``` with text "W"
    * ```h2``` with text "Th"
    * ```h2``` with text "Fri"
    * ```h2``` with text "Sat"
    * ```h2``` with text "Sun"
  * ```div``` with an ```id``` of "day-container".
    * ```div``` with a ```class``` of "row".
      * ```div``` with a ```class``` of "day" and text "01".
      * ```div``` with a ```class``` of "day" and text "02".
      * ```div``` with a ```class``` of "day" and text "03".
      * ```div``` with a ```class``` of "day" and text "04".
      * ```div``` with a ```class``` of "day" and text "05".
      * ```div``` with a ```class``` of "day" and text "06".
      * ```div``` with a ```class``` of "day" and text "07".
    * ```div``` with a ```class``` of "row".
      * ```div``` with a ```class``` of "day" and text "08".
      * ```div``` with a ```class``` of "day" and text "09".
      * ```div``` with a ```class``` of "day" and text "10".
      * ```div``` with a ```class``` of "day" and text "11".
      * ```div``` with a ```class``` of "day" and text "12".
      * ```div``` with a ```class``` of "day" and text "13".
      * ```div``` with a ```class``` of "day" and text "14".
    * ```div``` with a ```class``` of "row".
      * ```div``` with a ```class``` of "day" and text "15".
      * ```div``` with a ```class``` of "day" and text "16".
      * ```div``` with a ```class``` of "day" and text "17".
      * ```div``` with a ```class``` of "day" and text "18".
      * ```div``` with a ```class``` of "day" and text "19".
      * ```div``` with a ```class``` of "day" and text "20".
      * ```div``` with a ```class``` of "day" and text "21".
    * ```div``` with a ```class``` of "row".
      * ```div``` with a ```class``` of "day" and text "22".
      * ```div``` with a ```class``` of "day" and text "23".
      * ```div``` with a ```class``` of "day" and text "24".
      * ```div``` with a ```class``` of "day" and text "25".
      * ```div``` with a ```class``` of "day" and text "26".
      * ```div``` with a ```class``` of "day" and text "27".
      * ```div``` with a ```class``` of "day" and text "28".
    * ```div``` with a ```class``` of "row".
      * ```div``` with a ```class``` of "day" and text "29".
      * ```div``` with a ```class``` of "day" and text "30".

### Part III CSS

To complete Part II, fulfill the following requirements:
1. Target the ```element``` "body".
  * Set the ```margin``` to 0.
2. Target the ```id``` of "container".
  * Set the ```width``` and ```height``` to the full view height and width .
3. Target the ```id``` of "title".
  * Activate flexbox!
  * Center the items horizontally.
4. Target the ```id``` of "days-of-week".
  * Activate flexbox!
  * Set the direction of elements to row with flexbox.
  * Put space around the elements horizontally using flexbox.
5. Target the ```id``` of "day-container".
  * Set the ```width``` and ```height``` to the full width and height such that it is as big as its parent container.
  * Activate flexbox!
  * Set the direction of the elements to a column using flexbox.
6. Target the ```class``` of "row".
  * Set the ```width``` to 100%.
  * Set the ```height``` to 20%.
  * Activate flexbox!
  * Set the direction of elements to row using flexbox.
7. Target the ```class``` of "day".
  * Use the property ```flex-grow``` to make the items take up the same width to fill up the row. Look up the property flex-grow and see what it does!
  * Set the ```padding``` to 20px.
  * Give your days a border!

## Stretch Goals
1. Add HTML and CSS to one special day on your January calendar! In the HTML, tell us what the day is about. In your CSS, make that day stand out!
2. Use JavaScript to create Event Listeners that will listen for a click on a day. If a day is clicked, allow the user to add (append) an event on there! (On click, pop up a box for us to fill in the event details, then take these details and append it to that day upon submission!)
