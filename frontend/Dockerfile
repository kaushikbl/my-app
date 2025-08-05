# --- Stage 1: Build React App ---
FROM node:18-alpine AS builder

WORKDIR /app

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the source files
COPY . .

# Build the production version
RUN npm run build


# --- Stage 2: Serve with Nginx ---
FROM nginx:stable-alpine

# Clean default content
RUN rm -rf /usr/share/nginx/html/*

# Copy build files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# (Optional) Custom nginx config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]