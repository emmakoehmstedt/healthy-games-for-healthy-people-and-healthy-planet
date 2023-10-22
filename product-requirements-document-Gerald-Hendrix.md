Product Requirements Document (PRD)
Problem Description
Wanting to eat healthy food that also supports the health of the planet can be extremely challenging and frustrating. Our modern food and agriculture systems tend to focus solely on profits rather than environmental sustainability and the overall health of their consumers. People struggle to navigate a maze of misleading ads and hidden costs that blur the connections between climate change and our daily activities.
1.	Scope
The scope of this product will be limited to developing a food calculator prototype for Jr. Outdoor Food Navigators (JOFN) researchers and educators to evaluate. The product will be integrated into JOFN camps and curriculum, and a stretch goal of incorporating the product into regional education and outreach programs. 
For now, we will limit our scope to the two JOFN summer camps, 5-day KidSpirit Camp, and 4-H Workshop because additional funding would be required for further expansion.
2. Use Cases
The users will enter the name of a food ingredient into the calculator. Then users will review the ingredients carbon footprint, water footprint, and nutritional information. After being presented with this information JOFN researchers will question and analysis the user’s responses. 
Purpose and Vision (Background)
Our purpose is to improve children’s health and environmental health through climate resilient food citizenship. To strive to teach children about food systems and climate change. To empower children with scientific-based resources to become aware of the connections between climate change and their daily activities. 
We want to increase children’s climate literacy by teaching them how food systems impact climate change. We want children to have positive experiences with all stages of their food.
•	Planning
•	Shopping
•	Cooking
•	Eating
Empowered with informed knowledge these children can make climate-based food choices. 
Ultimately, contributing to healthy people and a healthy planet.
Stakeholders
•	JOFN Researchers and Educators
o	These stakeholders are our “Project Partners.” We will update them weekly with the products' progress. Other topics of discussion will be brainstorming product development, design, functionality, and field observations. 
o	Our project partners are the decision makers for the product. With their decisions they will guide us with the product’s direction. Such as features they want to see the product have and the product’s difficulty level. Before making informed decisions, our project partners require that our team have a working prototype and have conducted field observations and interviews. 
•	Engineering Team
o	Our engineering team will have regular updates on a one-to-two-day cycle. These will include code status updates, capstone assignment collaboration, and product development.
o	Like our project partners our engineering team are decision makers as well. They will make decisions on code, systems and platforms needed for the product's success, and product design. To make these informed decisions the engineering team needs to be in constant communication with each other and have a clear understanding and direction for the product set down by the project partners. 
•	Users
o	Users will require no updates on the project, and they are not decision makers. 
Preliminary Context
1.	Assumptions
•	Our target users prefer protecting the environment and minimizing the effects of climate change. 
•	App development tools are reliable and easily available. There are many app development resources available online, along with tutorials and help guides. 
•	We can develop our app to be compatible with mobile and desktop platforms. 
•	Timeline:
o	Develop a prototype of the Food Calculator for the project partners to evaluate. 
o	Conduct key informant interviews to improve prototype. 
o	Version 0 due December 10th, 2023.
o	Field test prototype with end users. 
o	Finalize product for analysis during summer camps.
•	Resource availability is no concern because resources are open-source and free. 
2.	Constraints
With this project we have no budgetary constraints or financial limitations. The project is research-oriented with the resource of our time being supplied through the Oregon State University Capstone program. At this moment we anticipate no technological constraints. We are expected to adhere to Human Subject Research Ethics, conducting ourselves in accordance with these guidelines. 
Our two biggest constraints are time and staff resources. Available time is a constraint we will have to continually manage. As seniors in college, we will need to be efficient with our time management because of the demanding nature of our current state. 
Lastly staffing resources are a constraint we must navigate. The project is heavy in the web app development arena, and currently our team only has one web development computer science person. This means there may be a steep learning curve with our product development for many of our staff. This may be our biggest challenge and we will need to work hard to overcome it. 
3. Dependencies
We are dependent on databases to support our project. These databases include a carbon footprints database, a water footprints database, and a food composition database. 
We have the sequential dependencies of needing to develop a prototype before we can begin informant interviews. 
We are dependent on libraries, frameworks, and platforms for developing our app.
Market Assessment and Competition Analysis
1.	Alternatives
•	BBC Food Carbon Emissions Calculator: Difficult to use. Confusing on how to set the ranges and what their purpose is. Old outdated display. Service would be exceedingly difficult for a third to fifth grader.
•	My Emissions: This platform is close to what we are trying to accomplish. The site has an intuitive interface, and the information provided is detailed and interesting. It provides information about individual food carbon footprints. Even with all this the service would not be a good fit because it does not provide water footprint or any nutritional information. 
•	EWG’s Food Scores: This is currently our greatest competitor. The site gives a score based on nutritional concerns, ingredient concerns, and processing concerns. The app can scan barcodes and generate information. Appears to have a gigantic database of over 80,000 foods that can be searched by name or category. This food score app does not consider water footprint, though, and this would not be a good fit. 
Target Demographics (User Persona)
Ezra McKinley

Age: 9
Gender: Male
Location: Corvallis, Oregon
Occupation: 4th grade student at Lincoln Elementary School
Hobbies: Playing soccer, reading comic books, watching nature documentaries
Likes: Animals, pizza, camping, video games
: Dislikes Homework, broccoli, bullies, boredom	Bio: Ezra is an outgoing and curious kid who loves to learn new things and have fun with his friends. He is interested in animals and the environment, and he wants to know how he can help protect them. He likes to eat pizza and other tasty foods, but he does not know much about nutrition or sustainability. He is excited to join the Junior Outdoor Food Navigators KidSpirit at Oregon State University, here he will learn how to make informed and sustainable food choices while exploring nature and having fun.

Goals: Ezra wants to have a fun and memorable summer camp experience. He wants to learn more about food and the environment, and how they are connected. He wants to try new foods and recipes and share them with his family and friends. He wants to feel good about his food choices and their impact on the world.

	Challenges: Ezra sometimes has trouble paying attention and following instructions. He can get bored easily if the activities are not engaging or challenging enough. He can also get frustrated if the activities are too hard or confusing. He sometimes has food allergies or preferences that limit his options. He can be influenced by peer pressure or social norms when it comes to food.







Requirements
User Stories and Features (Functional Requirements)
User Story	Feature	Priority	GitHub Issue	Dependencies
As a child I want to see that the food I am eating has a good nutritional score, so that I can be healthy. 	Nutritional Score	High	TBD	Food Composition Database
As a child from a migrant family, I want to eat foods that have low water footprints, so I can help preserve water for the farms my dad works at. 	Water Footprints	High	TBD	Water footprints database

Non-Functional Requirements
•	Page loading should be less than 3 seconds, because if it is longer the children will start to lose attention. 
•	Since the app is working with third to fifth graders, our privacy and security aspects need to be clearly defined and adhered to too. 
•	The app needs to be modular and could be scaled up in future iterations, such as adding AI tools to better engage the users. Further iterations will offer languages other than English. 
•	The product needs to work with many different platforms and devices. 
•	The code should follow best practice guidelines. 
Data Requirements
This project will require us to access databases that store information related to specific food ingredients. These databases include a carbon footprints database, a water footprints database, and we will have to create a food composition database to generate a health score. Our app will not collect or store user data, it will only be used to retrieve information to input into the food calculator. 
Data formats will include:
•	Text: This format will be used to store information pertaining to specific foods/plants. 
o	This information could follow a JSON format. 
•	Numeric: This format will be used to store carbon footprint values.
Data Structures
•	List: This can be used to store information the user inputs in the food calculator. 
•	Dictionary: This can be used to store food items with their corresponding carbon footprints, water footprints, and nutritional scores. 
Integration Requirements
We will use an API to integrate communication between our databases and the web app. The exact API is undetermined. We will use a cloud-based service to store our data for easy access, scalability, and security. The service could include Azure SQL, or AWS RDS. The integration points will be the food calculator. The data exchanges will consist of a query sent from the calculator to the databases to retrieve data related to a specific query. The data will be fetched and returned to the web app where it will process the data into information for the user. 
User Interaction and Design
Interactions:
•	The user will enter the name of a plant/food item into a search bar. 
•	The user can visually search though a list of foods by category. 
•	The user will review information about the plant/food item. 
Design Principles:
•	Simplicity: The app will be designed for third to fifth graders. So, the app should be easy to understand, and use will minimally clutter. Focusing on core functionality with no confusing surprises. The reading needs to be at an appropriate level, with a strong focus on visual learning.
•	Usability: The app needs to be user friendly with a smooth user experience. The app will have a consistent theme layout and provide intuitive user interactions. The app should support different devices and screen sizes. 
•	Visual: The web app will be visually appealing and interesting for third to fifth graders. 
Milestones and Timeline
Milestone	Duration	Timeline
Planning: Communicate with project partners and team to develop goals, objectives, and technical requirements.	2 weeks	October 27th, 2023
Analysis: Analyze the data and information gathered during the planning stage. Define features, specifications, and functionality. 	1 weeks	November 3rd, 2023
Design: Design the user interface, user interactions, user experiences, and backend of the web app. 	2 weeks	November 17th, 2023
Prototyping: Prototype the food calculator web app Version 0.	3 weeks	December 10th, 2023
Evaluate: JOFN researchers and educators will evaluate app.	2 weeks	January 19th, 2023
Prototyping: Iterate prototype with information gained from interviews.	6 weeks	March 1st, 2023
Interviews: Field test latest version of app with end users. 	2 weeks	March 15th, 2023
Development: Develop the final iteration of the app.	6 weeks	May 10th, 2023
Testing: Test app. 	2 weeks	May 24th, 2023
Release: App is complete and ready for researchers to use during the JOFN summer camps. 	2 weeks	June 7th, 2023

Goals and Success Metrics
Goal	Metric	Baseline	Target	Tracking Method
Product usability	How difficult would you rate the app?	Easy > 50%	Easy > 70%
	Interview
Product interest	How likely are you to recommend this product?	Very > 50%	Very > 70%
	Interview
Open Questions
•	What API do we want to use?
•	What framework are we going to use for this app?
•	Do we want to add any other functionality to the app beyond the food calculator?
Out of Scope

