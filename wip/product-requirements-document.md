# Problem Description
## Children and Parents
Climate change is a looming issue that impacts people around the world and is expected to worsen without immediate action. When children are taught about the climate crisis, they may feel hopeless or like there is nothing they can do to help the problem. With access to a maze of information online, some of it misleading, it can feel overwhelming to be able to make connections between daily activities and the climate. It can also be difficult to encourage children to make climate-resilient food choices. 
## Project Partners 
After implementing the JOFN summer camp studies in the summer of 2023, the preliminary findings showed that without early focus on the solutions to climate change, children became anxious about the situation. Right now, it is difficult for children to make easy and scientific-based decisions about the climate resilience of the food they are eating. Without engaging and user-friendly access to information about the food they are eating, it can be difficult for children to feel that they can contribute to the climate change solution with their food choices.
## Scope
The scope of this product will be limited to creating a web application that acts as a food calculator for Jr. Outdoor Food Navigators (JOFN) researchers and educators. It will be connected to a database of scientific-based information on different types of food. This database is already provided. The application will show the water and carbon footprints as well as the nutritional values of each food. Stretch goals include adding a plant or animal identification application and an AI-powered conversation tool to engage learning. We’ll limit our scope to English speakers who are participating in the JOFN summer camps, although a Spanish version of this product will be needed eventually. There are currently only two JOFN summer camps, a 5-day KidSpirit Camp, and a 4-H Workshop. Further implementation is not within our scope as additional funding would be required.
## Use Cases
The product is a calculator that allows users to enter the name of a food ingredient and get information about its carbon footprint, water footprint, and nutritional value. The product aims to increase the users’ awareness of how their food choices impact themselves and the environment. The product will be used by students and JOFN researchers who will analyze the user’s responses. The product will have the following features:
- A search function that lets users find a specific food ingredient from a database.
- A display function that shows the carbon and water footprints of the selected food ingredient, based on reliable sources.
- A display function that shows the nutritional value (score) of the selected food ingredient, based on standard criteria.
- A stretch goal of implementing a comparison function that lets users compare different food ingredients or dishes in terms of their environmental and nutritional impacts.

# Purpose and Vision (Background)
Our purpose is to improve children’s health and environmental health through climate-resilient food citizenship. By developing interactive tools and games to engage children and young adults, we can teach people about food systems and climate change. We
want to provide technology to empower children with scientific-based resources to become aware of the connections between climate change and their daily activities.
We want to increase children’s climate literacy by teaching them how food systems impact climate change. We want children to have positive experiences with all stages of their food.
- Planning
- Shopping
- Cooking
- Eating
We want to do this by applying JOFN’s findings and research to our work. This program has already found what works well for these children and young adults. We can take the principles and teachings that work best for each age group. Lastly, we’ll take this information to build our tools which will go back into the camp to bolster the curriculum and activities. Empowered with informed knowledge these children can make climate-based food choices. Ultimately, contributing to healthy people and a healthy planet.

# Stakeholders
1. JOFN Researchers and Educators
    - Our project partners are Siew Sun Wong (Primary Investigator, College of Health) and Xiangyou Shen (Co-PI, College of Forestry).
    - Our project partners will be updated once a week during our weekly meetings. They will be updated on the product's progress and will be presented with designs and prototypes in order to provide feedback.
    - Our project partners are the decision makers for the product and they guide us with the product’s direction and design. In order to make informed decisions we collaboratively work with our partners. Our partners and ourselves, the software development team come up with ideas together in meetings. We inform our project partners if the ideas, decisions, and scope of the product are plausible or too challenging for our team.

2. Engineering team
    - This group is our software engineering team.
    - We keep updated with a weekly meeting with the project partners, and a weekly meeting with our class Teaching Assistant. We also have a team communication channel. 
    - We collaboratively make decisions with the project partners. We formulate ideas together and inform the project partner about the maximum scale of the product or other limitations. When the product partner has chosen an idea or direction, our team makes the decisions of how to go about the technical implementation.

3. Users
    - This group consists of the K-12 campers of the JOFN program.
    - They will not need to be updated and will not make decisions, but usability and enjoyment of the product of this group is our key focus.

# Preliminary Context
## Assumptions
- We can easily acquire the database of foods and their information with the correct nutritional values from the project partners. 
- We can develop a web application that can be accessed by our project partners as well as the children and counselors involved in the summer camp.
- We have access to the project partners that will provide feedback on our progress weekly. 
Resource availability is not a concern because resources are open-source and free
- We can all develop on personal laptops and be able to use GitHub to share our project. 
- We will have users who will be able to test our product as we are working on it in order to get valuable feedback.
- We are aiming to have this complete by the time the project partners do another summer camp
## Constraints
With this project, we have no budgetary constraints or financial limitations. The project is research-oriented with the resource of our time being supplied through the Oregon State University Capstone program. At this moment we anticipate no technological constraints. We are expected to adhere to Human Subject Research Ethics, conducting ourselves in accordance with these guidelines.

Our three biggest constraints are time, resources, and staff resources. Available time is a constraint we will have to continually manage. As seniors in college, we will need to be efficient with our time management because of the demanding nature of our current state. For resources, we can only display food information that is provided to us & put it into a database, so we might not be able to display as wide of a variety of nutritional information as we would like.

Lastly, staffing resources are a constraint we must navigate. The project is heavy in the web app
development arena, and currently, our team only has one web development computer science person. This means there may be a steep learning curve with our product development for many of our staff. This may be our biggest challenge and we will need to work hard to overcome it.
## Dependencies
The product depends on various external and internal factors to function properly and meet the user’s needs. The product has the following dependencies:
- **Data dependencies:** The product relies on data from databases that provide information about the carbon and water footprints and the nutritional value of different food ingredients. The product also needs data from other sources if it wants to include more food options.
- **Software dependencies:** The product depends on libraries, frameworks, and platforms for developing the web application, such as React and NEXT.js. The product needs to ensure that these tools are reliable, compatible, and up-to-date.
- **Sequential dependencies:** The product depends on completing certain tasks in a specific order, such as developing a prototype before conducting user interviews, or having a solid design before creating the web application.
- **Feedback dependencies:** The product depends on feedback from various stakeholders, such as the project partners, the JOFN researchers, and the users. The product needs to collect and analyze feedback to optimize the product and move on to the next stages of the project.

# Market Assessment and Competition Analysis
## Alternatives
- BBC Food Carbon Emissions Calculator: Difficult to use. Confusing on how to set the ranges and what their purpose is. Old outdated display. Service would be exceedingly difficult for a third to fifth-grader.
- My Emissions: This platform is close to what we are trying to accomplish. The site has an intuitive interface, and the information provided is detailed and interesting. It provides information about individual food carbon footprints. Even with all this the service would not be a good fit because it does not provide water footprint or any nutritional information.
- EWG’s Food Scores: This is currently our greatest competitor. The site gives a score based on nutritional concerns, ingredient concerns, and processing concerns. The app can scan barcodes and generate information. Appears to have a gigantic database of over 80,000 foods that can be searched by name or category. This food score app does not consider water footprint, though, and this would not be a good fit.
- VeryWellFit: Takes in a recipe (individual ingredients) and shares the nutritional value.
- WebMD: Provides nutritional information for common items purchased at fast food restaurants & grocery stores.
- nutritionValue: provides general nutritional information about commonly purchased products within grocery stores
- My Fitness Pal: intended for more mature audiences, not very engaging, not gamified
- Food Emissions Calculator: complex, difficult to use, and not very engaging or gamified
 
Why it’s not the best idea to use alternatives: from the initial meeting, it seemed as if the project partners want us to make the nutritional calculator for 25 specific food items discussed within the summer camp, so no current need to expand it further than this.
## Helpful Resources
- US Department of Agriculture FoodData Central (https://fdc.nal.usda.gov/): a public database for food nutrition information
- https://eaternity.org/foodprint/database: footprint database

There already exists a bunch of publicly available food calculators that gives nutritional information<br>
There are useable databases, along with APIs, that have information on food nutrition and footprints

# Target Demographics (User Persona)
- Julia is an 11-year-old camper. She enjoys creative writing, riding bicycles with her neighbors, and playing with her family’s pet dog. At the summer camp, she has learned about real tasty food and how processed sugar food can make someone feel slow and sluggish. She wants to see how much sugar was in the breakfast she had that morning.
- Ezra is a 9-year-old boy who enjoys playing soccer, reading comic books, and watching nature documentaries. He is excited to join the JOFN summer camp where he will learn how to make informed and sustainable food choices while exploring nature and having fun. He wants to try new foods and recipes and share them with his family and friends. He wants to feel good about his food choices and their impact on the world. He has trouble paying attention and following instructions. He can get bored easily if the activities are not engaging or challenging enough.
- Luiz is a 15-year-old high-school student who enjoys playing music and hiking with his friends on the weekends. At a JOFN workshop, he has just learned about how different plants use different levels of water and is curious about which plants use the most water. Luiz speaks English but would prefer to read and interact with materials in Spanish.

# Requirements
## User Stories and Features (Functional Requirements)
These functional requirements use MoSCoW Prioritization. A description of this is below.<br>
*MoSCoW Prioritization:*
- **M**ust Have: non-negotiable product needs that are mandatory for the team
- **S**hould Have: Important initiatives that are not vital, but add significant value
- **C**ould Have: Nice to have initiatives that will have a small impact if left out
- **W**ill Not Have: Initiatives that are not priority for this specific time frame

| User Story    | Feature       |  Priority     | Github Issue  | Dependencies  |
| --- | --- | --- | --- | --- |
| As a young student, I want to be able to see a nutritional health score for the foods that I eat so I don’t have to do extra research into my foods.  | Nutritional Score  | Must Have | TBD | N/A |
| As a young student, I want to be able to easily see if my foods are climate resilient since I don’t know how to research this on my own yet.  | Food Calculator (Foodprints)  | Must Have | TBD | N/A |
| As a camp counselor, I want the supplemental nutritional information to be very user-friendly so I can understand it well and not be confused when explaining it to campers | Food Calculator | UI/UX | Should Have | TBD | N/A |
| As a parent to a young student, I want a food calculator that uses images to represent the portion sizes of the foods I am calculating so my child can understand how much food they are entering. | Food Calculator Image Representation of Size | Should Have | TBD | N/A |
| As a Spanish-speaking student, I would like to be able to use the Food Calculator program in Spanish so I can understand the information more easily | Spanish Mode | Could Have / Will Not Have | TBD | N/A |

## Non-Functional Requirements
- The calculator should have very minimal latency, page loading should be less than 3 seconds because if it is longer the children will start to lose attention. 
- The camp counselors should have no trouble navigating throughout & it should be easy to use for the students.
- Since the app is working with third to fifth-graders, our privacy and security aspects need to be clearly defined and adhered to too.
- The app needs to be modular and could be scaled up in future iterations, such as adding AI tools to better engage the users. Further iterations will offer languages other than English.
- The product needs to work with many different platforms and devices (webpage formatting)
- The code should follow best practice guidelines.
## Data Requirements
The product requires various types of data to create and display the food calculator. The product needs the following data:
- Data from the project partners: The product will need data for the foods that are discussed during the camp, such as their names, images, and descriptions.
- Data from external databases: The product needs data about the carbon and water footprints of different food ingredients, based on reliable and up to date information stored in an external database. The product also needs data about the nutritional value of different food ingredients, based on standard criteria and scoring methods stored in an external database.
- Data from the user: The product does not need to collect or store any personal or sensitive data from the user, such as their name, email, location, or preferences. The product only needs to store the user’s input in the food calculator, such as the food ingredient they select or search for, and the quantity they enter.

The product also needs to consider the following aspects of data management:
- Data formats: The product needs to use consistent and compatible data formats for storing and retrieving data, such as text, and numeric.
- Data structures: The product needs to use appropriate and efficient data structures for organizing and manipulating data such as tables in csv files.
- Data tools: The product needs to use reliable and secure data tools for accessing and hosting data, such as Supabase.
## Integration Requirements
We will use an API to integrate communication between our databases and the web app. The exact API is undetermined. We will use a cloud-based service to store our data for easy access, scalability, and security. The service could include Azure SQL, or AWS RDS. The integration points will be the food calculator. The data exchanges will consist of a query sent from the calculator to the databases to retrieve data related to a specific query. The data will be fetched and returned to the web app where it will process the data into information for the user.
Maintenance: The project partners will be working directly with the end users to collect real-time data, provide support, and collect feedback.
<br>Deployment:
- Local development environments and GitHub to keep everyone’s code and documentation updated.
- Group members can run their server locally when testing.
- Potential use of AWS but this has not yet been discussed.
- Need to register a domain name and choose a hosting provider.

## User Interaction and Design
Interactions:
- The user can select a single or multiple whole-food items to calculate
- The user can visually search through a list of foods by category.
- The user will be presented with information about the plant/food item.

Design Principles:
- Simplicity: The app will be designed for third to fifth-graders. So, the app should be easy to understand and use with minimal clutter. Focusing on core functionality with no confusing surprises. The reading needs to be at an appropriate level, with a strong focus on visual learning.
- Usability: The app needs to be user-friendly with a smooth user experience. The app will have a consistent theme layout and provide intuitive user interactions. The app should support different devices and screen sizes.
- Visual: The web app will be visually appealing and interesting for third to fifth-graders.
- Educational: The information is presented in a way that is easier for children to understand such as comparing sizes to physical measurements and comparing the climate footprint measurements to real-world instances.

Media Collection (Figma, Wireframes, Mockups Etc.):<br>
[PRD Media Collection](https://docs.google.com/document/d/1jVi8ro4-QyRwsyHoVbZHJT5p5Q82Dwlu82jYp29z9_s/edit?usp=sharing) (Second Document supplied in upload)
# Milestones and Timeline
| Milestone | Duration | Timeline |
| --- | --- | --- |
| Planning: Communicate with project partners and team to develop goals, objectives, and technical requirements. | 2 weeks | October 27th, 2023 |
| Analysis: Analyze the data and information gathered during the planning stage. Define features, specifications, and functionality. | 1 week | November 3rd, 2023 |
| Design: Design the user interface, user interactions, user experiences, and backend of the web app. | 2 weeks | November 17th, 2023 |
| Prototyping: Prototype the food calculator web app Version 0. | 3 weeks | December 10th, 2023 |
| Evaluate: JOFN researchers and educators will evaluate app. | 2 weeks | January 19th, 2023 |
| Prototyping: Iterate prototype with information gained from interviews. | 6 weeks | March 1st, 2023 |
| Interviews: Field test latest version of app with end users. | 2 weeks | March 15th, 2023 |
| Development: Develop the final iteration of the app. | 6 weeks | May 10th, 2023 |
| Testing: Test app. | 2 weeks | May 24th, 2023 |
| Release: App is complete and ready for researchers to use during the JOFN summer camps. | 2 weeks | June 7th, 2023 |

# Goals and Success Metrics
| Goal | Metric | Baseline | Target | Tracking Method| Goal Achieved |
| --- | --- | --- | --- | --- | --- |
| Ensure Data Quality | Does the data allow us to make the calculator? | Yes or No | By 12/04 | Discuss with team | Yes |
| Determine which frameworks will be used for the web application. | Document in github listing which framework will be used for which task. | Document what database, server, and frontend we will be using. | Document the database, server, frontend, and any APIs we will need. | Viewing Document | Yes |
| Seamless data retrieval from the database | Milliseconds | 1 second | 1 second | Code testing | Yes |
| Very base prototype 0, application home screen. | Do we have all the requirements to create the home screen? | Yes or No | By 12/10 | Check with team | Yes |
| Generate Feedback | Do we have a substantial amount of user feedback
Feedback from 20+ users
By 5/8
Viewing Document
Yes
Product usability 
How difficult  
would you rate  
the app?
Easy > 50% 
Easy > 70% 
Interview
Partially Done
Product interest 
How likely are you  to recommend  
this product?
Very > 50% 
Very > 70% 
Interview
No
Project partner
satisfaction


How useful do you feel the
product is to you?
Very > 50% 
Very > 70% 
 Interview


Yes



# Open Questions
- [ ] Which database will we be using and where will it be hosted?
- [ ] Will we be able to test our product with kids for engagement purposes and when will this be completed?
- [ ] How realistic is it to create a mock user for the project partners to practice with?
- [ ] Will we have time to add a Spanish-speaking option to our calculator?
- [ ] What security measures will we be taking to ensure that only an administrator has access to the database?
# Out of Scope
- Mobile Application: A mobile app is beyond the scope of our project and we will have to stick to a web application. We do not have enough members or experience making mobile apps in order to implement this in three terms.
- AI: It is likely that we will not have enough time to implement any sort of artificial intelligence in our program. This is due to our time constraints and that we have a small group.
- Languages besides English and Spanish: We will not have the time/resources to have somebody translate the application into any other language other than English or Spanish. Even Spanish is a stretch goal for our project.
