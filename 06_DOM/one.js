/*
DOM selectors:
   DOM selectors are methods provided by JavaScript to select elements from the DOM (Document Object Model).
   They are part of the document object and allow you to query elements in various ways.

   1. Selecting by ID
    USE: getElementById to grab a single element by its id.
   
    const title = document.getElementById("main-title");
    console.log(title); // <h1 id="main-title">Hello</h1>
   
   2. Selecting by Class
    USE: getElementsByClassName to grab all elements with a specific class.

    const items = document.getElementsByClassName("item");
    console.log(items[0]); // First element with "item" class
 
   querySelector and querySelectorAll in JavaScript: These are powerful DOM selection methods that let you find elements using CSS selectors.

   3. querySelector
     Selects the first element that matches a CSS selector.
     Returns a single Element or null if no match is found.
     
    querySelector("#title")
    document.querySelector('input[type="password"]') //we can select all css selector using querySelector

   4. querySelectorAll
     Selects all elements that match a CSS selector.
     Syntax:
     const elements = document.querySelectorAll(selector);

     WE can loop through all the items using forEach(()=>{})
      ||Loop through all selected elements
      allItems.forEach(item => {
        console.log(item.textContent);
      });

     Returns a static NodeList, which can be looped through like an array. (it is not all same as array. it is slightly different)


*/

/*
I can select in this was also
getElementById('title').className/.id --> I will get class Name or .id use krke ID milegi

Using getAttribute(value wanted)
getElementById('title').getAttribute("class") OR getElementById('title').getAttribute("id")

Using setAttribute: to change the name of specific attribute (it will always overwrite remember it)

getElementById('title').setAttribute("class", "test") --> class name will be overwrite to test(name changes)
so to avoid overwriting we can write it with the previous name

getElementById('title').setAttribute("class", "test heading") --> heading was it's previous name so it will also remain
*/

/*
we can also style.PropertyToBeStyled

const title = document.getElementById("title")
title.style.padding = 15px
title.style.borderRadius = 15px
title.style.color = green
*/

/*
  IMP: You can update the content of an element using the following methods:

  1. Using innerHTML
    Updates the entire content inside an element, including HTML

  2. Using innerText
    Updates the text inside an element without HTML formatting and does not includes HIDDEN text

    myli.innerText
    "five"
    myli.innerText = "six"
    "six"

  3. Using textContent
    Similar to innerText, but it includes HIDDEN text (not affected by CSS).
*/

/*
HTML collection and NodeLists:

1. HTML collection: 
                    Get returned by getElementsByClassName, getElementsByTagName, getElementsByName
                    Always live (updates automatically when the DOM changes)
                    No direct forEach, but can be iterated with a loop or converted to an array(using Arrat.from())
                    Contains Only Element nodes
                    No array methods like map, forEach
2. NodeList
                   Get returned by querySelectorAll, childNodes
                   Can be live or static (depends on the method used)
                   Yes, you can iterate with forEach in most modern browsers
                   Any kind of node (Element, Text, Comment)
                   Supports array methods (after converting to an array)
*/