# Introduction
This project is called “Healthy Games for Healthy People and Healthy Planet”. The overall goal of this project is to empower children with science-based resources to learn more about the connections between climate change and their daily activities. It is important for children to learn about how they can contribute to climate solutions with their own daily actions.

This document discusses the architecture for a web-based food calculator application that calculates the footprints (carbon and water) and the nutrition scores of various foods. The calculator’s objective is to provide food information for students who partake in a summer camp hosted by the College of Nutrition & College of Forestry at Oregon State. Ensuring this architecture will be easily usable, aesthetically pleasing, and fully functional is key to the success of the project.
# Architectural Goals and Principles
## Goals
- The application will be scalable, stable, testable, and flexible.
- The application will be integrated into the JOFN[^1] camps and curriculum, and potentially expanded to regional education and outreach programs.
- The application will continue working and be updated after the capstone project is over.
- The application will grow in complexity with newer modules added over time.

## Principles
- Do not suffer from “tunnel vision”
  - Our process should be holistic and not limited to only focusing on task completion.
- Do not “reinvent the wheel”
  - Our team should not lose time developing features/tools that already exist.
- Accommodate change
  - The product will be flexible and adapt to user needs.
- Encapsulation
  - The application will protect the data by not allowing any module to alter data not attached to it.

# System Overview
- User interface/Frontend: NEXT.js
  - NEXT.js is an open-source React framework that provides the building blocks for creating a full-stack web application. 
- Backend: Supabase
  - Supabase is an open-source platform that utilizes the amazing strength of a PostgreSQL database for modern web applications. 
- Database: PostgreSQL
  - PostgreSQL is a very popular open-source relational database management system.
- Third-Party APIs[^2]: REST[^4], Elastic Search<br>
![Three different sections in a top down format where each leads to the next. First section is "User Interfaces" which is comprised of the web browser like Edge and Chrome. The second section is "Front-end" that is made up of React.js and NEXT.js. The last section is the "Back-end" or the Data Sources. THis is made up of Supabase where the data tables are stored.](software-development-architecture-image.png)

# Architectural Patterns
## Client Server Pattern
This architecture involves a client that requests a service and a server that provides that service. This pattern will make sense for our project because we will have multiple clients who will be requesting information from one place. A client will request information about one or multiple food items and the server will get that information from the database and give it to them. 
## Microservices Pattern
This architecture combines multiple services that will work interdependently to create a larger system. This will work with our application because we want to implement a front-end user website and an administrative website where admins can add, remove, and edit data in the database. Our overall application will be divided into two microservices: the user page and the admin page. These will work together to create the total application.

# Component Descriptions
- **User Interface/Frontend (Next.js):** Displays Food Calculator interface and handles user input. Displays calculated score from user input. Provides additional information, navigation from screen to screen, and makes HTTP requests to the backend server.
- **Backend Server (Supabase):** Serves as our API[^2], handles all queries to the database given from the front-end, and sends proper response information & HTTP calls to the front end. 
- **Database (PostgreSQL via Supabase):** Supply by project partners. Stores carbon footprints, and water footprints for a range of foods. Easily scalable to allow for more food information to be entered.
- **Server:** Localhost for development & then deployed on a permanent OSU server (will be figured out during winter term).

# Data Management
Develop a relational database utilizing RESTful APIs[^2] & test with Insomnia/Supabase. The database will contain nutritional scores, carbon footprint, and water footprint for individual foods, along with being accessed by using an API[^2] offered by Supabase.  PostgreSQL will be the relational database we use as that is utilized within Supabase. 

# Interface Definitions
**GET /**	      tasks return the information requested from the user once the = or finish buttons are pressed.<br>
**PATCH /**    update any information inserted to the database through a logged-in user<br>
**POST /**      send any information that was requested from the front end<br>
**DEL /**        Delete information if inserted accidentally/incorrectly (or need to update nutrition information)<br>

# Considerations
## Security
With our current scope, security risks aren’t very high but it is still good practice to make our site as secure as possible and to comply with security requirements.

It is essential for the admin login to be secure since users without administrative privileges cannot modify the information. This will require both authentication and authorization. We will want to make sure that we have a user login page (authentication) for admins to modify information. We will also want to have different privilege levels for different users. For example, only users authorized with admin privileges should be able to add, remove, or alter data in the database.

To secure our data we will want to maintain our SQL[^5] source code under version control (GitHub) outside of Supabase. The data will be extracted from the external database and inputted into the Supabase database. Transport Layer Security is another approach to security that we may enlist. Since HTTPS[^3] is standard practice for websites, it is widely used and accepted.

## Performance
We are currently dealing with a limited number of fruits/vegetables, but it will be important to design our database for quick insertion and retrieval so it can handle larger amounts of data in the future. Overall, the performance needs to be quick & effective, which can be done through horizontal scaling utilizing containers.

In the big picture, our application may have upwards of 50 users at once. In the future, if our application was used by regional education facilities or outreach programs, we may want to think about using a REST[^4] API[^2] optimizer. This could help us scale up to meet the needs of increased traffic. Overall, we will want to make sure that our application can quickly query the database and display that information for the user to see.

## Maintenance and Support
The project partners are responsible for the web application once the 9-month capstone project is complete. The versioning/issue tracking will be the sole responsibility of the project partners at the end of this capstone sequence. The project partners will be working directly with the end users to collect real-time data, provide support, and collect feedback.

# Deployment Strategy
Will be deployed with the implementation of different end-user interfaces (phones, tablets, desktops). Our team will have this in consideration when designing this project. <br>
The backend and data will stay the same but the web app layout should be designed in a way to be resized to fit multiple different types of screens.<br>
Because of the project’s technical scale, we could use the tools and services provided by Supabase without any cost.<br>
For testing team members can run their server locally. For deploying the production environment, Github pages could be used to host the front-end files.

# Testing Strategy
Our testing environment will consist of unit tests, integration tests, system tests, and user tests.
## Unit Test
- The product will be broken into pieces during development with each unit being tested.
## Integration Test
- Each time a new module is developed, the system will go through an integration test in which that module is tested
## System Test
- Before any user tests are performed the entire system will go through an end-to-end system analysis.
## User Test
- The interface and functions of the web app will be tested by end users.
- The users will perform specific tasks in simulated real-life environments.

# Glossary
- CRUD - Create, Read, Update, and Delete. The basic components of database design.
- NC - Nutritional Calculator
- ReactJS - A JavaScript library that allows you to easily create user interfaces. It removes developers from working with the DOM and allows you to split up your program into components.

[^1]: JOFN - This is the program Junior Outdoor Food Navigators. It is an OSU program partnered with Asp3ire and Kids Spirit with the goal of teaching children about environmental health and climate resilience through positive experiences with nature and food.
[^2]: API - Application Programming Interface
[^3]: HTTPS - Hypertext Transfer Protocol Secure
[^4]: REST - Representational State Transfer
[^5]: SQL - Structured Query Language
