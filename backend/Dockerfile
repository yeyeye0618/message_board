# Use official Python image as base
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy backend files
COPY backend ./backend

# Install backend dependencies
RUN pip install flask flask-cors

# Expose port 5000 for Flask app
EXPOSE 5000

# Set environment variables
ENV FLASK_APP=backend/app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Start Flask app
CMD ["flask", "run"]
