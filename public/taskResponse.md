# TASK RESPONSE

### A data structure to use for this web:

- As we are only showing data from an API or hard-coded dummy data, json will be good enough to retrieve data from.

- If we develop more features and allow users to create events, it’s better to switch to hash table structure where events can be more organized and easier to retrieve since our database could be in a much bigger size.

- I would store events data per day for faster retrieving and storing in the database, then get a whole month of data and store it in an array, then get the next/previous month of data when users move to the next/previous month.

### What I have learned building this project:

- Using dayjs library to get, set, manipulate dates and times data.

- Practicing creating and using custom hooks in app to better reusing logic in app at different places.

- Practicing using useState to create states, update state for better sharing information between components

- Practicing using useContext to create and store common data that can be available for accessing in the app without having to pass the props to each level of child components.

- Practicing using JavaScript array functions such as: map(), filter()

### If I was to continue working on this project, what would I develop next:

- Re-design the data structure

- Improve the components structure by moving codes to custom hooks

- Adding events related features such as: creating events, allowing users to modify/update events, syncing events from another app,…

- Adding better UX such as: dark mode, importing background image, applying a favorite color palette,…
