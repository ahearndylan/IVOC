# Use the official Python image from the Docker Hub
FROM python:3.10

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /code

# Install psycopg2 dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc

# Install Python dependencies
COPY requirements.txt /code/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the project
COPY . /code/

# Collect static files with Whitenoise
RUN python manage.py collectstatic --noinput

# Expose port 8000
EXPOSE 8000

# Start the Gunicorn server (using 3 workers for better performance)
CMD ["gunicorn", "--workers", "3", "--bind", "0.0.0.0:8000", "ivoc.wsgi:application"]
