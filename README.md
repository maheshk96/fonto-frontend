# fonto-frontend

This repo contains the source code for developing the front-end task using HTML/CSS and Javascript. 
The initial structure of the webpage was designed using HTML and the usability was enhanced using Javascript. 

The single webpage consists of a Table with information regarding the ID, Address and Valuation of properties that are stored in the backend. This data is accessed through the base url: https://take-home.hasura.app/api/rest.

The Design - 
The table data is loaded on the screen as soon as the page is loaded. The user has the option to click on the add property button and enter new property details in the overlay that has popped up. Once the data is submitted, the data is added to the backend and on refresh, the newly added data is displayed on the front-end table.
The cancel button can be used to clear the input data from the two text boxes in the overlay and the user can go ahead and enter new data once again. 
The two text boxes in the overlay are for Address and Valuation. The address will take alphanumeric data as its input, whilst valuations will only accept numerical values in the input field.

Changes -
The other changes that had to be made were regarding the addition of the commas at the appropriate ten's place for the property valuations and the dollar sign as a prefix during the display of the data. 
There was a requirement to also display the sum total of all of the property valuations at the bottom of the table. 

Improvements -
The UI/UX look and feel of the webpage is very basic currently owing to precedence for functionality over aesthetics. Given a little more time, the UI/UX of this webpage can be enhanced using CSS and certain frameworks if necessary. 

To run this code, the index.html file has to be opened in the browser of your choice.
