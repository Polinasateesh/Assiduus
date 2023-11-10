This project is a simple React dashboard application that uses D3.js for charts. The application includes the following features:

- Clickable Sidebar: Each menu item shows the same page.

- Randomized Data: The top bar of the Dashboard page includes a button to randomize data for the chart. The data is randomized when the Manage/Date Selector on the first chart is changed.

- File Upload Popup: Clicking the "New Sales Invoice" button triggers a popup for file upload. No specific action is taken in the form.

## Getting Started

1. Clone the repository:
 
   git clone <repository-url>
   cd my-d3-dashboard
Install dependencies:


npm install
Start the application:


npm start
Open your browser and visit http://localhost:3000/.

Project Structure
The project is structured as follows:

src/: Contains React components.

components/: Specific components for the application.
Layout.js: Main dashboard component.
FileUploadPopup.js: Component for file upload popup.

public/: Contains static assets.

index.html: Main HTML file.
README.md: Project documentation.

package.json: Project configuration file.

Usage
The application provides a dashboard with a chart and a button to randomize data.

Clicking the "New Sales Invoice" button opens a popup for file upload.




