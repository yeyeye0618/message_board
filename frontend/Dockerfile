# Use official nginx image as base
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built frontend files to nginx html directory
COPY dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
