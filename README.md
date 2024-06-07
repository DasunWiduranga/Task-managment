# Task Management System

## Introduction
This is a task management system built with Spring Boot for the backend and React for the frontend. The application allows team leads to assign tasks to team members, update task statuses, and manage tasks efficiently.

## Prerequisites
- Java JDK 17
- Maven
- MySQL
- Node.js and npm

## Setup Instructions

### Backend (Spring Boot)

1. **Clone the repository**:
git clone https://github.com/DasunWiduranga/taskmanagement.git
cd taskmanagement
Setup MySQL Database:

##Create a database named taskmanagement:
sql

CREATE DATABASE taskmanagement;
Update the src/main/resources/application.properties file with your MySQL credentials.
Run the Spring Boot Application:



mvn spring-boot:run
The backend should be running at http://localhost:8080.

Frontend (React)
Navigate to the frontend directory:

cd frontend
Install npm packages:
npm install
Start the React application:
npm start
The frontend should be running at http://localhost:3000.
