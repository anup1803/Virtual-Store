# Use official Node.js 18 image as base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json before other files to leverage Docker layer caching
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Build the Angular app using production mode (ensure correct build configuration)
RUN npm run build -- --configuration production

# Command to serve the Angular app for development purposes (not recommended for production)
CMD ["ng", "serve", "--host", "0.0.0.0"]

# Expose the port for the Angular app
EXPOSE 4200
