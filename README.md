# Web Quiz Application

This is a web-based quiz application built using React.js and node.js. It allows users (teachers) to make quizzes, edit them and delete them and also for normal users to take the quizes and be marked.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- User Authentication: Login and Register.
- Home Page: Displays all available quizzes :
  - Teachers : add a new quiz, edit a quiz, delete a quiz.
  - Students : Enter a quiz.
- Quiz Page: Displays the quiz questions and options.
- Add Quiz: Allows teachers to add their own quizzes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- react.js
- npm

### Installation

1. Clone the repo :

   ```
   git clone https://github.com/mehkad/Web-Quiz.git
   ```

2. Install NPM packages :

   ```
   npm install
   ```

3. Go to ./server/App.js and change the following line to your own database connection :

   ```
   mongoose
   .connect(
      "mongodb+srv://mehkadiri:azerty@quiz.j0qb7ph.mongodb.net/?retryWrites=true&w=majority"
   )
   ```

### Usage

To start the server on your local machine for development purposes, and using the concurrently module, run the following:

```
npm run begin
```

The application will start running on http://localhost:3000.

## Contributing

Any contributions you make are greatly appreciated.

1. Fork the Project.

2. Create your Feature Branch

```
git checkout -b feature/AmazingFeature
```

3. Commit your Changes

```
   git commit -m 'Add some AmazingFeature'
```

4. Push to the Branch

```
   git push origin feature/AmazingFeature
```

5. Open a Pull Request

## Contact

- Email: mehkadiri@gmail.com
- Twitter: @mehkadiri
- Instagram: @meh_kadiri
