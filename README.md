# Business Operations Platform

A full-stack business operations management platform designed to help companies manage internal service requests, assign tasks to employees, track progress, and monitor operational performance.

> 🚧 **Work in Progress** — This project is currently under active development.

## 📌 Project Overview

Companies often handle internal requests through emails, messages, spreadsheets, and informal communication. This can make it difficult to track responsibilities, deadlines, and the overall workload.

The goal of this project is to build a centralized platform where employees can create and manage internal service requests while managers can monitor operations and workload.

### Example requests

* IT access requests
* Hardware problems
* Software installation requests
* Employee equipment requests
* Internal operational issues

## 🎯 Main Goals

* Centralize internal service requests
* Assign requests to responsible employees
* Track request status and priority
* Monitor overdue requests
* Provide operational statistics
* Implement role-based access control
* Maintain an audit history of important actions

## 🛠️ Technologies

### Frontend

* React
* Vite
* JavaScript
* React Router
* Axios
* CSS

### Backend

* Java 21
* Spring Boot
* Spring Web
* Spring Data JPA
* Spring Security
* JWT
* Hibernate

### Database

* MySQL

### Tools

* Git
* GitHub
* VS Code
* IntelliJ IDEA
* Postman
* Swagger / OpenAPI

## 🏗️ Planned Architecture

```text
React Frontend
      │
      │ REST API
      ▼
Spring Boot Backend
      │
      │ JPA / Hibernate
      ▼
MySQL Database
```

## 📋 Planned Features

### Authentication

* [ ] User registration
* [ ] User login
* [ ] JWT authentication
* [ ] Role-based authorization
* [ ] Secure protected routes

### Ticket Management

* [ ] Create tickets
* [ ] Edit tickets
* [ ] Delete tickets
* [ ] Assign tickets
* [ ] Change ticket status
* [ ] Set priority
* [ ] Search and filtering
* [ ] Track due dates

### Employees

* [ ] Employee management
* [ ] Department management
* [ ] Employee assignment
* [ ] Employee workload overview

### Dashboard

* [ ] Total tickets
* [ ] Open tickets
* [ ] In-progress tickets
* [ ] Completed tickets
* [ ] Overdue tickets
* [ ] Average resolution time
* [ ] Department statistics

### Audit Log

* [ ] Track ticket changes
* [ ] Track assignments
* [ ] Track status changes
* [ ] Track important user actions

## 👥 User Roles

The application is planned to support three main roles:

| Role     | Responsibilities                      |
| -------- | ------------------------------------- |
| Employee | Create and manage their requests      |
| Manager  | Assign and monitor requests           |
| Admin    | Manage users and system configuration |

## 📁 Project Structure

The project will be organized into separate frontend and backend applications:

```text
business-operations-platform/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── ...
│
├── backend/
│   └── ...
│
└── README.md
```

## 🚀 Current Progress

### Frontend

* [x] React + Vite setup
* [x] React Router setup
* [x] Axios setup
* [x] Basic project structure
* [x] Login page UI
* [x] Login form state management
* [ ] Backend integration

### Backend

* [ ] Spring Boot setup
* [ ] Database configuration
* [ ] REST API
* [ ] Authentication
* [ ] Ticket management
* [ ] Employee management

### Deployment

* [ ] Docker
* [ ] CI/CD
* [ ] Cloud deployment

## 🧪 Development

The frontend can be started with:

```bash
cd frontend
npm install
npm run dev
```

The backend setup and database configuration will be documented as development progresses.

## 📈 Future Improvements

Possible future improvements include:

* Email notifications
* File attachments
* Advanced analytics
* Exporting reports
* Real-time notifications
* Docker containerization
* Automated testing
* CI/CD pipeline
* Cloud deployment

## 📚 Purpose

This project is being developed as a practical full-stack application to explore modern web development, enterprise application architecture, REST APIs, authentication, database design, and software engineering practices.

---

**Status:** 🚧 In Development
