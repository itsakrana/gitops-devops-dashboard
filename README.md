# 🚀 GitOps DevOps Dashboard

A complete **End-to-End DevOps Project** using **GitOps (Argo CD)**, **Kubernetes**, **Docker**, and **Jenkins CI/CD**.

---

## 📌 Project Overview

This project demonstrates how to build and deploy a **cloud-native application** using modern DevOps tools:

* ⚙️ CI/CD using Jenkins
* 🐳 Containerization using Docker
* ☸️ Kubernetes for orchestration
* 🔄 GitOps using Argo CD
* 📊 Monitoring with Prometheus & Grafana

---

## 🏗️ Architecture

```
Developer → GitHub → Jenkins → DockerHub → Kubernetes → ArgoCD → Deployment
```

---

## 📁 Project Structure

```
gitops-devops-dashboard/
│
├── argocd/
├── apps/
├── k8s/
├── frontend/
├── backend/
├── ci-cd/
```

---

## ⚙️ Tech Stack

* Frontend: React
* Backend: Node.js (Express)
* Database: MongoDB
* CI/CD: Jenkins
* Container: Docker
* Orchestration: Kubernetes
* GitOps: Argo CD
* Monitoring: Prometheus & Grafana

---

## 🚀 Features

* 🔄 Automated CI/CD Pipeline
* 📦 Docker Image Build & Push
* ☸️ Kubernetes Deployment
* 🔁 GitOps Continuous Deployment (Argo CD)
* 📊 Monitoring Dashboard

---

## 🧪 Run Locally

## 🚀 0. PREREQUISITES (INSTALL FIRST)

✅ Required tools
Docker
Minikube
kubectl
Git

##  🔹 Verify installation

docker --version
kubectl version --client
minikube version
git --version

## 📁 1. CLONE / CREATE PROJECT
git clone https://github.com/YOUR_USERNAME/gitops-devops-dashboard.git
cd gitops-devops-dashboard

## 🐳 2. BUILD & PUSH DOCKER IMAGES

👉 Replace YOUR_DOCKER with your DockerHub username
```
🔹 Login
docker login

🔹 Build images
docker build -t YOUR_DOCKER/backend ./backend
docker build -t YOUR_DOCKER/frontend ./frontend

🔹 Push images
docker push YOUR_DOCKER/backend
docker push YOUR_DOCKER/frontend
```
⚠️ IMPORTANT

👉 Update images in:
```
k8s/backend/deployment.yaml
k8s/frontend/deployment.yaml
image: YOUR_DOCKER/backend:latest
image: YOUR_DOCKER/frontend:latest
```
## ☸️ 3. START KUBERNETES
minikube start

## 🧱 4. CREATE NAMESPACE
kubectl apply -f k8s/namespace.yaml

## 📦 5. INSTALL ARGO CD
```
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

## 🔐 6. ACCESS ARGO CD UI
kubectl port-forward svc/argocd-server -n argocd 8080:443

👉 Open browser:

https://localhost:8080

🔑 Get password
kubectl get secret argocd-initial-admin-secret -n argocd -o jsonpath="{.data.password}" | base64 -d

👉 Username: admin

## 🚀 7. DEPLOY PROJECT (IMPORTANT STEP)
kubectl apply -f argocd/parent-app.yaml

🧠 WHAT HAPPENS NOW

Argo CD will automatically deploy:
```
apps/
 ├── frontend
 ├── backend
 ├── database
 └── monitoring
```

## 🧪 8. VERIFY DEPLOYMENT
kubectl get pods -n devops

👉 All pods should be:
Running ✅

## 🌐 9. OPEN APPLICATION
minikube service frontend -n devops

👉 Browser will open automatically

-----

## 🔁 Jenkins Pipeline

* Checkout code
* Build Docker images
* Push to DockerHub
* ArgoCD auto deploy

---

## 📊 Monitoring

* Prometheus → Metrics collection
* Grafana → Dashboard visualization

---

## 🎯 Learning Outcomes

* GitOps workflow implementation
* CI/CD pipeline automation
* Kubernetes deployments
* Real-world DevOps practices

---

## 🙌 Author

**Ankit Rana**

---

## ⭐ Give a Star

If you like this project, give it a ⭐ on GitHub!

