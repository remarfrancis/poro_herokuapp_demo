Hello! Just some guidelines of what I have created for this assessment:

1. I have used Playwright with javascript to complete this assessment
2. Everything was tested from end to end according to assessment, with assistance from AI tools to check/review on certain codes (Claude and Gemini)

How to Clone GitHub Repo to local:
- Open local Git Terminal and input this command:
git clone https://github.com/remarfrancis/poro_herokuapp_demo.git
- Go inside the directory of the folder 'poro_herokuapp_demo' to check if cloned successfully

Prerequisites:

- Node.JS
- Visual Studio Code

To set Path to Node:

- After installation of Node.js, go to the folder page of Node (ex. C:\Program Files\node.js)
- Copy the path
- Search and go to 'Edit the system environment variables' selection in Windows Startup
- Click on Environment Variables
- On System Variables, select 'New' button
- Variable Name: NODE_HOME, Variable Value: C:\Program Files\node.js

So open file in Visual Studio Code:

- Select 'File' on the upper left of the VSC
- Select 'Open Folder'
- Select 'poro_herokuapp_demo' folder and click 'Select Folder' button

To install Build and Install Playwright repo in VSC:
- Open Terminal in VS Code
- Input the command: "npm install"

To run execution of my assessment in VSC:

- Under poro_herokuapp_demo, click 'tests', click and open 'uiBasicsTest.spec'
- Below the VSC app, there is a blue line. Double click and a Terminal will open
- Inside the terminal, input 'npx playwright test' and hit ENTER
- The automation will now execute the assessment
