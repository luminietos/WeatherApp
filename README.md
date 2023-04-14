# WeatherApp - Ionic Angular Weather App 
An Ionic Angular weather application with humidity, and average, max., and min. temperature.

## Description
This is the code of an Ionic Angular weather application (created in collaboration with [@marivuolahti](https://github.com/marivuolahti)) that was done using Firebase, Visual Studio Code and Command Prompt/Terminal/Powershell. It was done using the [OpenWeather's API](https://openweathermap.org/).

The application allows the user to submit the name of a city, and receive that city's average, minimum and maximum temperature, as well as its humidity level. 
On top of this, the application has a functional menu and navigation with a login/sing up/continue as guest page, a "my profile" page (with image selection and file upload), and an "about us" and "contact us" pages.

## So how does it work?

The user can input an email and password and create an account, input an email and a password tied to an account they’ve already created and log in, or continue as a guest, which requires no logging in or signing up. 

![signup or login](https://user-images.githubusercontent.com/77718358/232033544-dbc10be4-f0fb-48f1-aee6-97bc55880f57.jpg)

If they choose to continue as a guest, they will not have access to a profile page. If they enter an invalid password or username, either during the signing up or singing in portion, the website will give them an error message.

![invalid pw or username](https://user-images.githubusercontent.com/77718358/232033904-8ee94bda-8f32-45fc-964b-2dccce7f1431.jpg)

After the user has signed in/up, they’re redirected to their profile page, where they can change their profile picture, and continue to the main content’s page via the “see the weather” button.

![profile w o  pic](https://user-images.githubusercontent.com/77718358/232034214-1696f555-006a-4301-9740-9b59d186f87a.jpg)

At this point, the user can also access the other pages via the menu via clicking on the three lines on the left side of the toolbar) or log back out to the sign in/up page via clicking the log out button (the door icon) on the right side of the toolbar.

If the user chose “continue as guest”, they are redirected directly to the main page, “Today’s Weather”. If they logged in or signed up, they can navigate to the same page via the profile’s button, or through the menu link titled “weather”.

On the main page, the user can enter the name of a city of their choosing into the search bar, and receive back that city’s average, minimum and maximum temperature and is humidity level on that day from an API. They’ll also be able to see a drawn image reflecting that city’s weather.

![weatherpage](https://user-images.githubusercontent.com/77718358/232034724-f000ac34-6205-49ca-a21a-bd5ee8d95c95.jpg)
![weatherpage2](https://user-images.githubusercontent.com/77718358/232034904-e3714ed3-b5ae-4d63-abe4-f719d031f8c9.jpg)

The user can also access an “about us” and a “contact us” page through the menu, where the user can learn more about the project/app, and where to find its creators. The GitHub links on the page below are functional, and open up onto a new, separate page.

![aboutus](https://user-images.githubusercontent.com/77718358/232035192-27fd519b-7a3d-4a49-8479-9f9c476632fe.jpg)

(Below is the “contact us” page, where the user could, were this a real app, be able to contact someone via email or phone if they had any questions or comments regarding the application.)

![contactus](https://user-images.githubusercontent.com/77718358/232035428-db30f5af-d819-431f-9064-ce5e20390a14.jpg)

Finally, below you can see the site’s fully functional menu, In the screenshot below, behind the menu there’s an ‘error message’— for a lack of a better term— that appears when the user has yet to type in the name of a city into the search field, gently suggesting to the user, that in order for data to appear, they must first prompt the application by giving it a city. 

![menu](https://user-images.githubusercontent.com/77718358/232035752-8878f5b1-7121-4e76-afa0-bef54469e822.jpg)

## Status 
The development of this project is complete for the foreseeable future.

## License
[MIT](https://choosealicense.com/licenses/mit/)
