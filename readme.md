Trade Trove is an online platform enabling users to effortlessly buy and sell items. By registering on the site, users can list their items for sale, streamlining the process of connecting buyers with sellers.

To start the app:
1. Run the command ,,ng serve'' in the exam-project folder
2. Run the command ,npm run start, in the Rest-api folder


Components

AppComponent
The root component of the application.

MainComponent
Represents the main layout of the application.

HomeComponent
Displays the home page of the application.

ErrorComponent
Handles error-related UI and functionality.

AuthenticationComponent
Manages authentication-related processes and UI.

SmthWentWrongComponent
Provides a UI for displaying errors or unexpected behavior.

Modules
BrowserModule
Provides essential services and directives for browser applications.

CoreModule
Houses core functionality and services shared across the application.

HttpClientModule
Enables communication with HTTP servers via the HttpClient service.

SharedModule
Contains reusable components, directives, and pipes shared across multiple modules.

UserModule
Contains features and components related to user management.

ItemModule
Contains features and components related to item management.

AppRoutingModule
Manages application routing and navigation.

Providers
appInterceptorProvider
Registers an interceptor to intercept HTTP requests and responses for global processing.