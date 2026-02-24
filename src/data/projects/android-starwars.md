---
title: "Android Star wars"
image_source: "/res/images/android_starwars_thumbnail.png"
short_description: "A reference book for the Star Wars universe using Jetpack Compose and the SWAPI GraphQL endpoint. The app implements pagination with local caching by running the paginated results through a local Room database"
long_description: "A native android application serving as reference book for the Star Wars universe. For smoother UX the app implements pagination of remote requests with local caching. \n \n The app is implemented with Jetpack Compose. As it strictly follows Clean Architecture principles, the app can be used to showcase the different responsibilities of the data, the domain and the presentation layers. Inside the presentation layer we find the use of ViewModels from the MVVM architecture. For pagination with integrated local caching, I used the Paging3 library and ran the responses of remote requests through a local Room database."
publish_date: 2024-04-20
tech_stack:
    - "Kotlin"
    - "Jetpack Compose"
    - "GraphQL"
    - "Room"
    - "Paging3"
---