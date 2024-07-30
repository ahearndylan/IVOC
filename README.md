# IVOC Nonprofit Website

## Project Description
This project is a web application developed for the IVOC nonprofit organization. The website aims to provide information about the organization, its services, and how to get involved.

## Features
- Information about IVOC and its mission
- Details about services offered
- Online donation functionality
- User registration and login
- Photo gallery and media content
- Contact and connect with the organization

## Live Site
(Currently hosted remotely, not yet deployed)

## Installation

### Prerequisites
- Docker
- Python
- Django

### Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/ahearndylan/IVOC.git
   cd IVOC
   ```

2. Build and start the Docker containers:
   ```bash
   docker-compose up -d
   ```

3. Apply migrations:
   ```bash
   docker-compose exec web python manage.py migrate
   ```

4. Create a superuser:
   ```bash
   docker-compose exec web python manage.py createsuperuser
   ```

### Usage

#### Running the Development Server
1. Start the server:
   ```bash
   docker-compose up
   ```
2. Open your web browser and navigate to http://127.0.0.1:8000/

#### Accessing the Admin Interface
1. Navigate to http://127.0.0.1:8000/admin
2. Log in with the superuser credentials you created

## Project Structure
- app/: Contains the Django applications.
- static/: Contains static files such as CSS, JavaScript, and images.
- templates/: Contains HTML templates.
- docker-compose.yml: Docker Compose configuration file.
- Dockerfile: Docker configuration file for building the project image.
- manage.py: Django’s command-line utility for administrative tasks.
- requirements.txt: Lists the Python dependencies.

### External Dependencies
The project uses the following external CSS and JavaScript libraries:

#### CSS
- Django Static Files:
  ```html
  <link rel="stylesheet" href="{% static 'css/base.css' %}">
  <link rel="stylesheet" href="{% static 'css/style.css' %}">
  ```
- Bootstrap CSS:
  ```html
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  ```
- Bootstrap Icons:
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
  ```
- Google Fonts:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
  ```

#### JavaScript
- jQuery:
  ```html
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  ```
- Popper.js:
  ```html
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
  ```
- Bootstrap JS:
  ```html
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  ```

### Requirements
The project requires the following Python packages as specified in the requirements.txt file:
- Django==3.2.4
- djangorestframework==3.12.4
- gunicorn==20.1.0
- psycopg2-binary==2.9.1

### Contribution Guidelines
Fork the repository
Create a new branch (git checkout -b feature-branch)
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature-branch)
Open a pull request

### License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
Dylan Ahearn - DAhearn@clarku.edu
