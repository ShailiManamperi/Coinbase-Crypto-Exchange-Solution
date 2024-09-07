# Use the official Node.js image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the application port
EXPOSE 8080

# Start the Node.js application
CMD ["node", "src/app.js"]
