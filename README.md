# News App

<span>
<img src="./docs/assets/preview.mp4" alt="preview"  width="270" />
</span>

<hr />

## Getting Started

- Fork or Clone the repo, then set it up:

```
$ cd rn-news
$ yarn install
```

### Run on Android

```
$ yarn run android
```

## A brief description of the project

### Task

> Build a News App

> Perform CRUD actions on news and comments

## Folder Structure

```
|-- src/
    |-- components/
    |-- config/
    |-- assets/
        |-- fonts/
        |-- icon/
        |-- images/
    |-- hooks/
    |-- routes/
    |-- redux/
    |-- screens/
        |-- home/
        |-- news-detail/
    |-- utils/
        |-- lib/
        |-- news-detail/
    |-- App.js
```

- `shared/assets`: Folder to put assets like fonts, icons and images
- `components`: Folder to put all shared Component
- `config` : Folder to put all of ours constant like `api url`, `mock`, `themes`, `default news item`, `default images` and all others constant data that dont changed.
- `utils` : Folder to put our helpers function like Consume API and formating data or others helpers.
- `hooks` : Folder to put all of ours custom hooks/logic for component.
- `screens` : Folder to put our different screens for our app such as `home screen`.
- `routes` : Folder to put our routes configuration such as `stack navigation` and

## Technologies Used

1. Implemented app navigation with `react-navigation`.

2. Used `react-native-toast-notifications` for toast notifications.

3. Used `React-native-elements` for component styling.

4. Used `react-native-uuid` for generating unique id for news and comments item.

5. Optimised image rendering using `react-native-fast-image`.

6. Optimised Application ui scaling using `react-native-size-matters`.

7. Implemented image carousel with `react-native-snap carousel`.

8. Used `redux-rematch` for managing global state.

9. Used `axios` for managing api calls.
