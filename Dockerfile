# Use an official Node.js runtime as the base image
FROM node:20.5.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install -g npm@latest
RUN npm install

ENV NEXT_PUBLIC_API_URL=http://167.71.95.216
ENV NEXT_PUBLIC_EMAIL="tzamirov@gmail.com"
ENV NEXT_PUBLIC_PHONE="+996 (700) 355-350"

# Copy the rest of the application code to the container
COPY . .

# Build the React/Next.js app for production
RUN npm run build
