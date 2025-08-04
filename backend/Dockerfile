# Use official Node.js image as base
FROM node:16-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of your backend source code
COPY . .

# Expose the port your backend listens on (e.g., 5000)
EXPOSE 5000

# Command to run your backend app
CMD ["node", "server.js"]
