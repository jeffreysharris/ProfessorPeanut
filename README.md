ProfessorPeanut
================

ProfessorPeanut, or simply Peanuts, is a prototype web app for a microcharity platform.

This app is built using the Meteor.js framework and is styled using Twitter Bootstrap 3. Custom Twitter Bootstrap styling is courtesy of Thomas Park's Superhero theme at Bootswatch.com. Favicon/logo is a product of the contributors.

Peanuts is built on studies of microcharitable, peer-to-peer donations via the web. Specifically, we looked at r/assistance on Reddit and compared that user experience to other web venues for charitable giving, like charity:water. Through surveys and observation, we found that r/assistance users look for verification of the requestor's needs and a proven history or intent of reciprocity on the part of the requestor. We then used voluntary opinion polling and A/B tests to determine the best methods for articulating and visualizing that information, especially focusing on reciprocity.

Peanuts is our proof-of-concept based on these results.

The live demo can be viewed at peanuts.meteor.com.

To test Peanuts locally, you'll need the Meteor framework which is available via a terminal command:

	  curl https://install.meteor.com/ | sh

Windows installation is a bit more complicated. You can learn more here: https://www.meteor.com/install.

You'll need a testbed of dummy data, which are found in the /private folder as seed_ requests and users json files. Navigate to the Peanut folder in the Terminal, and start the meteor server with the simple command:
  
	  meteor

If all went smoothly, you should see dummy data populating, and a splash screen. Feel free to create an account using the sign-in link in the upper left, and test the functionality. If you don't want the server to erase everything and redo all dummy transactions, remember to re-comment-out those functions in startup.js.
