# EatZoid 🍱

A fullstack grocery & food subscription web app built with:

- ⚙️ Django & Django REST Framework (Backend)
- ⚛️ React (Frontend)
- 🐳 Docker + Docker Compose for local development

## Features

- User registration & login (JWT-based)
- Product browsing (Dairy, Grocery, Meat, Vegetables, Fruits)
- Subscription box management
- Real-time API integration between backend & frontend

## Run Locally (Dev)

```bash
# Backend (Django)
cd FreshEatzz
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
