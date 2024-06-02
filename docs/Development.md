# 1. Introduction
Welcome to the project documentation for Healthy Games for Healthy People. This document provides an overview of the project, technologies used, development environment setup, coding standards, testing strategy, deployment process, and additional resources.
## Acknowledgement
### Team Members 2023-2024
- Emma Koehmstedt, koehmste@oregonstate.edu 
- Garrett Berliner, berlineg@oregonstate.edu 
- Gerald Hendrix, hendrige@oregonstate.edu
- Kyu Sung Kwon, kwonk@oregonstate.edu 
- Mitch Stephenson, stephean@oregonstate.edu
### Project Partner
- Siew Sun Wong, siewsun.wong@oregonstate.edu 

# 2. Project Overview
Games for Healthy People & Healthy Planet aims to teach how children engage with their food consumption habits, promoting sustainability and health awareness. The application provides a user-friendly interface where individuals can track their food choices, explore nutritional information, and evaluate the environmental impact of their dietary decisions. Games for Healthy People & Healthy Planet represents a holistic approach to fostering healthier, more sustainable lifestyles. Through its intuitive interface and comprehensive features, the platform empowers children to make informed decisions that contribute to their well-being and the health of the planet.

# 3. Technologies Used

## Frontend
- ### Prototype - Figma
- ### React

## Database/Backend
- ### Supabase

## Deployment 
- ### Vercel

# 4. Development Environment Setup

## Getting Started

git clone [github url] <br>
git pull origin main <br>
git checkout -b [Your name for a new branch]
> [!NOTE]
> the purpose of git pull origin main is to get the latest updated files on the remote main branch

Example: If Sally was cloning the development to her local machine

```
git clone https://github.com/emmakoehmstedt/healthy-games-for-healthy-people-and-healthy-planet.git
git pull origin main
git checkout -b sally-branch
```

Then, run npm install
```bash
npm install
```

With the code on you local machine navigate to the branches root directory.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/home](http://localhost:3000/home) with your browser to see the result.

You can start editing the page by modifying `food_app/pages/home.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Dependencies and Configuration

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# 5. Project Structure

## Directory Layout and Key Files
Every file needed to support the website is located in the Github Repository.

The CS Capstone Games for Healthy People and Healthy Planet google drive has other documentation, and team meeting notes (2023-2024) (see drive: https://drive.google.com/drive/u/0/folders/0ADCT01vyDaVBUk9PVA)

The main pages of the project are located in the "pages" directory where their stylings can also be found in the same location in the "styles" directory.

# 6. Development Workflow

## Issue Management
Our team met weekly outside of project partner meetings for issue management. During this time we would create issues based on out last project partner meeting (see Issue Requirements). Then each team member assigned themself an issue to complete by its expected deadline. 

## Issue Requirements
Issues are created and put in the “Backlog” or “Todo” Sections
Each issue should contain the following

** Description ** (Description of issue requirements, usually with a reference of what the complete issue should look like)

** Requirements ** Functional requirements and guidelines that must be met for the issue to be marked as completed

** Dependencies ** Issues that must be completed before this issue can be worked on. Blockers could also be written here.

** Estimated Time ** Estimated time to complete

** Number of People ** Number of people expected to work on this task. Usually each task is assigned to 1 team member but an especially large or complex task may be assigned to multiple.

## Version Control
Github was used for version control. (See Team Github Guide https://docs.google.com/document/d/1b1WWi0wAWdkEKpzrHgF7SgBjLXmuqTqFWBDgihuB4q8/edit?usp=share_link).
Before begining work on an issue, a team member should make sure their main is up to date.
Then they should create a new branch for the specific issue.
Then the team member should switch to that branch.
After implementing their changes the team member should add and push their branch changes to main.
Lastly, they should create a pull request on Github (see Code Review Process).

## Code Review Process
After a pull request has been made, a different team member will review the work. If the changes look acceptable then the branch can be merged aned deleted. The issue can be moved from "In Review" to "Done"

# 7. Testing Strategy

## User Testing
Documentation has been created to use for user testing (see Testing Procedure https://docs.google.com/document/d/1U2PbzDxy5eGq0peJgallrt_4CHgNS625LYwPjV9bp2k/edit?usp=sharing)

# 8. Deployment Process

Our website is currently using vercel for deployment.

This Github repository is attached to a Vercel Deployment at this link: https://healthy-games-for-healthy-people-and-healthy-planet-coral.vercel.app/.

In order to make changes to the application:

1) Make a new branch. The branch's name should reflect the task at hand. For example, if the task is to add a button the branch should be titled 'add-button'.

2) Make changes to that branch and commit them.

3) Push the branch to the github repo.

4) Create a pull request for the branch.

5) Have a team member review the pull request and either merge it into the main branch, which will automatically deploy it to Vercel, or request changes.

# 9. Future Designs

Plans for future designs involve synthesizing and implementing feedback gathered from our presentation/user testing done at the FCH Conference.

# 10. Additional Resources

The CS Capstone Games for Healthy People and Healthy Planet google drive has other documentation, and team meeting notes (2023-2024) (see drive: https://drive.google.com/drive/u/0/folders/0ADCT01vyDaVBUk9PVA)

See Team Github Guide https://docs.google.com/document/d/1b1WWi0wAWdkEKpzrHgF7SgBjLXmuqTqFWBDgihuB4q8/edit?usp=share_link
