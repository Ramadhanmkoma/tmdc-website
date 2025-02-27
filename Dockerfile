# Use Node.js for building the Vite app
FROM node:20.13.1-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm cache clean --force && npm install --force

# Copy the rest of the application files
COPY . .

# Build the Vite app (Vite outputs to "dist")
RUN npm run build

# Use Nginx to serve the built app
FROM nginx:latest

# Copy the build output from Vite (dist folder) to Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Remove the default NGINX configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom NGINX configuration file
COPY config/nginx.conf /etc/nginx/conf.d/

# Expose the default NGINX port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
