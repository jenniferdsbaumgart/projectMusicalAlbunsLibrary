
# Music Album Library

This is a React project that simulates a music album library. The goal is to allow the user to add, view, and remove albums from their collection, as well as save this information to localStorage for data persistence. The application also uses Vite as the build tool.

## Features

- Add albums: The user can add albums to their collection.
- Remove albums: The user can remove albums from their collection.
- View albums: The list of albums is displayed with title, cover, artist, and year.
- Data persistence: The data is saved in localStorage, ensuring that the album collection is retained even after the browser is closed.
## Project Structure

**App.js**: Main component that displays the list of albums and the album addition form.
NewAlbumForm.js: Form for adding new albums to the collection.
**Album.js**: Component responsible for displaying each album in the list.
**useAlbumCollection.js**: Custom hook to manage the album collection (add, remove, and persist to localStorage).
**TextInput.js**: Reusable component for text input in the album addition form.


## Tech Stack

**React**: JavaScript library for building user interfaces.
**Vite**: Build tool for fast development.
**CSS**: For styling the application.
**localStorage**: For persisting the album collection in the browser.

## License

This project is open-source and available under the [MIT](https://choosealicense.com/licenses/mit/) License.
