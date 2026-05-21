# URL Shortener Platform 🚀

A full-stack cloud-native URL Shortener application built using modern DevOps and Kubernetes practices.

This project demonstrates:

* Frontend + Backend development
* Docker containerization
* Kubernetes orchestration
* AWS EKS deployment
* CI/CD using GitHub Actions
* Code quality scanning using SonarCloud
* Automated deployments on every Git push

---

# 🌐 Live Application

## Frontend URL

[http://aae77406364264cdabcc7601aa1c70c9-129159181.eu-west-1.elb.amazonaws.com/](http://aae77406364264cdabcc7601aa1c70c9-129159181.eu-west-1.elb.amazonaws.com/)

---

# 📌 Features

* Create short URLs from long URLs
* Responsive dashboard UI
* Popup modal for URL shortening
* MongoDB database integration
* REST API architecture
* Dockerized frontend and backend
* Kubernetes deployments and services
* CI/CD automation with GitHub Actions
* SonarCloud static code analysis
* AWS EKS cloud deployment

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS

## Backend

* Node.js
* Express.js

## Database

* MongoDB

## DevOps & Cloud

* Docker
* Kubernetes
* AWS EKS
* GitHub Actions
* SonarCloud

---

# 🏗️ Architecture Diagram

```text
                   ┌────────────────────┐
                   │      GitHub        │
                   │  Source Repository │
                   └─────────┬──────────┘
                             │
                             │ Git Push
                             ▼
                 ┌────────────────────────┐
                 │ GitHub Actions CI/CD   │
                 │------------------------│
                 │ 1. Build               │
                 │ 2. Test                │
                 │ 3. SonarCloud Scan     │
                 │ 4. Docker Build        │
                 │ 5. Push Docker Images  │
                 │ 6. Deploy to EKS       │
                 └─────────┬──────────────┘
                           │
                           ▼
               ┌─────────────────────────┐
               │     AWS EKS Cluster     │
               └─────────┬───────────────┘
                         │
        ┌────────────────┴────────────────┐
        ▼                                 ▼
┌───────────────────┐         ┌───────────────────┐
│ Frontend Pod      │         │ Backend Pod       │
│ React + Nginx     │         │ Node.js + Express │
└─────────┬─────────┘         └─────────┬─────────┘
          │                               │
          ▼                               ▼
   Frontend Service                Backend Service
                                           │
                                           ▼
                                 ┌────────────────┐
                                 │ MongoDB Pod    │
                                 └────────────────┘
```

---

# ⚙️ CI/CD Pipeline

The project uses GitHub Actions for continuous integration and continuous deployment.

## Pipeline Stages

### ✅ Job 1 – Build & Test

* Install dependencies
* Build frontend application
* Validate backend setup

### ✅ Job 2 – Docker Build & Push

* Build frontend Docker image
* Build backend Docker image
* Push images to Docker Hub

### ✅ Job 3 – SonarCloud Analysis

* Static code analysis
* Security checks
* Reliability checks
* Maintainability checks
* Quality gate validation

### ✅ Job 4 – Kubernetes Deployment

* Deploy frontend to AWS EKS
* Deploy backend to AWS EKS
* Deploy MongoDB
* Expose services using LoadBalancer

---

# ☁️ Kubernetes Components

## Deployments

* frontend-deployment.yaml
* backend-deployment.yaml
* mongo-deployment.yaml

## Services

* frontend-service.yaml
* backend-service.yaml
* mongo-service.yaml

---

# 🐳 Docker Images

## Backend Image

* Node.js runtime
* Express API server

## Frontend Image

* React production build
* Nginx web server

---

# 🔐 SonarCloud Integration

SonarCloud is integrated into the CI pipeline for:

* Security analysis
* Code smell detection
* Maintainability analysis
* Reliability checks
* Quality gate enforcement

---

# 🚀 Deployment Flow

```text
Developer Code Change
        ↓
Git Push to GitHub
        ↓
GitHub Actions Triggered
        ↓
Build + Test
        ↓
SonarCloud Analysis
        ↓
Docker Image Build
        ↓
Push Images to Docker Hub
        ↓
Deploy to AWS EKS
        ↓
Application Updated Automatically
```

---

# 📂 Project Structure

```text
url-shortener/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── dockerfile
│
├── k8s/
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── mongo-deployment.yaml
│   ├── mongo-service.yaml
│   └── frontend/
│       ├── frontend-deployment.yaml
│       └── frontend-service.yaml
│
├── models/
├── server.js
├── package.json
├── dockerfile
└── .github/
    └── workflows/
        └── ci.yml
```

---

# 🧪 API Endpoint

## Create Short URL

```http
POST /shorten
```

### Request Body

```json
{
  "longUrl": "https://youtube.com"
}
```

### Response

```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

---

# 📈 Future Enhancements

* Prometheus Monitoring
* Grafana Dashboards
* HTTPS with TLS
* Ingress Controller
* Custom Domain
* Helm Charts
* ArgoCD GitOps Deployment
* Redis Caching
* URL Analytics Dashboard

---

# 🧠 Learning Outcomes

This project helped in understanding:

* Kubernetes fundamentals
* AWS EKS deployment
* Docker image lifecycle
* CI/CD automation
* Cloud-native architecture
* Microservice deployment patterns
* Infrastructure troubleshooting
* DevOps workflows

---

# 👨‍💻 Author

Kishore Ramesh

GitHub: [https://github.com/kishore-0501](https://github.com/kishore-0501)

---

# ⭐ Resume Highlights

* Built and deployed a full-stack cloud-native URL Shortener platform using React, Node.js, MongoDB, Docker, Kubernetes (EKS), GitHub Actions CI/CD, and SonarCloud.
* Implemented automated build, test, security scanning, Docker image creation, and Kubernetes deployment pipelines.
* Deployed scalable frontend and backend services on AWS EKS using Kubernetes LoadBalancer services.
* Integrated SonarCloud for code quality, reliability, maintainability, and security analysis.
