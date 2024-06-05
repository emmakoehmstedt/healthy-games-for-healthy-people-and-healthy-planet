# Principles
## Communication
- We are responsive with our asynchronous communication.
    - Keep tabs on the team Discord and respond to teammates within 24 hours for important messages (i.e. meeting times & quick responses).
    - Use "@everyone" for urgent information about an issue that would halt progress or waste working time.
    - We all must regularly communicate via our Discord server, and reacting with emotes counts.
- We are responsible for maintaining a regular communication schedule with our project partners, and teaching assistants.
## Meetings
- Schedule weekly meetings with the project partners and update them regularly on the project.
    - Prepare an agenda, and list of questions before each meeting with project partners.
- Find times where most team members can meet with project partners. A team member will take meeting minutes and add them to the google shared drive for members who couldn’t attend.
## Work
- We will always have work items ready in the backlog for the next two weeks at the minimum.
- Every work item needs a user story (or motivation), technical description, dependencies, time estimate, and acceptance criteria before anyone can work on it.
    - Team members must log work immediately after completing it.
    - Work items should not take more than three days to be completed, but need to encompass a meaningful chunk of work. If a work item is too large, it should be divided into smaller work items.
    - Work items must define a specific task like “add user authentication credentials”, not an ongoing task like “fix bugs as you go”.
- All sub-tasks need to be manageable & evenly distributed amongst team members based on their strengths.
## Github
- All edits must be done within each person's own branch - this also helps track who is contributing what to the project.
- Once the feature, bug, or refactoring is done, a Pull Request is created.
    - All pull requests will be reviewed and "signed off" by two members of the team - we need to ensure that it does not ever break the main branch.
    - The Pull Request needs to comply with the Definition of Done (see later) and should be linked to the corresponding work item.
## Kanban
- We will use a Kanban board to show what we need to do, what is in progress, what is in the code review phase, and what is completed.
- Work items in the Kanban board will be taken from the product backlog, which will be ordered from most to least urgent.
- A work item must have a thorough description, time estimate, and criteria for acceptance before it is added to the Kanban board.
- In order to move from the "Code Review" to the "Completed" section of the Kanban board, the code needs to be reviewed by at least two team members. This is when the Pull Request can be merged.

# Process 
Our team agrees to follow a Kanban Agile approach for the project, which involves the following steps:
- Create a backlog of tasks that need to be completed, ordered by priority and urgency.
- Use a Kanban Project Board to track the progress of the tasks, with five columns: Backlog, Todo, In Progress, In Review, and Done.
- Assign tasks to different team members based on their roles and skills.
- Meet once a week for planning and backlog refinement, as well as for communicating key takeaways and challenges.
- Meet with the project partners once a week for updates on progress, feedback, brainstorming, and demoing the product. 
- Meet with the TA once a week for guidance and support.

# Roles 
**Product Manager:** The product manager will be responsible for communicating with the project partners (stakeholders) about their needs for the product. They will be noting these needs in the project partner meetings. Based on stakeholder feedback, they will create user stories and add these to the backlog. - Gerald<br>
**Project Manager:** The project manager will be responsible for refining the backlog and sorting the tasks in order from most to least urgent. They will oversee assigning tasks to different group members and will check in with team members on their progress. - Garrett<br>
**Frontend:** This role can be filled by multiple team members. This will involve implementing the front end of the product. This includes color schemes, styles, navigation, and displaying information from the back end. - Kyu Sung, Mitch, Gerald (Emma if need be)<br>
**Backend:** This role can be filled by multiple team members. This involves implementing the back end of the product. This includes creating the database, managing CRUD[^1] operations on the database, connecting the database to the front end, authenticating users, and more. - Emma and Garrett (Mitch if need be)<br>
**Design:** This role can be filled by multiple team members. This involves drawing out different screens of the web application on Figma to achieve the desired appearance and usability that the project partners are looking for. - Emma, Kyu Sung, Gerald, Garrett, Mitch<br>
**Data Analysis:** This role can be filled by multiple team members. This will involve analyzing the data given by the project partners, determining what data needs to be stored in the database, and how the total scores will be calculated. - Emma, Kyu Sung, Gerald, Garrett, Mitch

# Tooling 
<table>
  <tr>
    <th>Version Control</th>
    <td>GitHub - Everyone has access to one primary/central GitHub Repository.</td>
  </tr>
  <tr>
    <th>Project Management</th>
    <td>GitHub Issues & Projects: Issues will be inserted in the Project Board which has a backlog, to-do, in-progress, in-review, and completed sections.</td>
  </tr>
  <tr>
    <th>Documentation</th>
    <td>README file, Project Notes within our Google Drive, Astro & Starlight</td>
  </tr>
  <tr>
    <th>Test Framework</th>
    <td>Playwright & Jest</td>
  </tr>
  <tr>
    <th>Linting and Formatting</th>
    <td>Prettier for code formatting/quality concerns</td>
  </tr>
  <tr>
    <th>CI/CD</th>
    <td>GitHub Actions</td>
  </tr>
  <tr>
    <th>IDE</th>
    <td>Generally Visual Studio Code (though up to each Contributor [team member])</td>
  </tr>
  <tr>
    <th>Graphic Design</th>
    <td>Figma, Pen and Paper, & Google Slides/Powerpoint.</td>
  </tr>
  <tr>
    <th>Others</th>
    <td>
        - Utilize MySQL Workbench for Database Management<br>
        - Utilize Prometheus for Monitoring<br>
        - Each member will have their own branch within the main GitHub repo.<br>
        - Any code edits will need to be checked by another member before being committed to the main branch; ensure minimal errors exist within Main.
    </td>
  </tr>
</table>

# Definition of Done (DoD) 
Definition of done is a set of criteria that guarantees quality and completeness of changes made to the project. Our definition of done includes the following steps:
- Present the sketch or idea to the project partners and get their approval.
- Distribute the work required to meet the acceptance criteria to the team members.
- Perform unit testing and integration testing for the changes.
- Review the changes by at least two team members and merge them into the main branch.
- Update the documentation, the release notes, and the Kanban board.
- Prepare a demo for the next project partner meeting and get feedback.
- Evaluate and avoid any breaking changes or minor bugs caused by the new feature.
- Deploy the changes to staging.

# Release Cycle 
Our release schedule will emphasize continuous development and testing with a scheduled major release at the end of every term (3 months).

Every team member will work on their section or issue. Then the section or issue will get staged for testing and quality assurance. After it is tested, the issue will be double checked by two team members and merged to the main branch on Github.

Use semantic versioning; Major, Minor, and Patch:
- Increment the Major version for changes that could break compatibility with the project’s existing code.
- Increment the Minor version for new features and changes that do not impact functionalities of existing code.
- Increment the Patch version for bug fixes or changes that make minor improvements.

# Environments
<table>
    <tr>
        <th>Environment</th>
        <th>Infrastructure</th>
        <th>Deployment</th>
        <th>What is it for?</th>
        <th>Monitoring</th>
    </tr>
    <tr>
        <td>Production</td>
        <td>AWS through CI/CD</td>
        <td>Release</td>
        <td>Sleeping well at night</td>
        <td>Sentry</td>
    </tr>
    <tr>
        <td>Staging (Test)</td>
        <td>Playwright and Jest</td>
        <td>Pull Request</td>
        <td>New unreleased features and integration tests</td>
        <td>Sentry</td>
    </tr>
    <tr>
        <td>Dev</td>
        <td>Local (macOS and Windows)</td>
        <td>Commit</td>
        <td>Development and unit tests</td>
        <td>N/A</td>
    </tr>
</table>

# Team Information and Contributors
Our team is Games for Healthy People and Healthy Planet for the class CS461.<br>
Document Contributors:
- Garett Berliner
- Gerald Hendrix
- Emma Koehmstedt
- Kyu Sung Kwon
- Mitch Stephenson

[^1]: CRUD - Create, Read, Update, and Delete. The basic components of database design.