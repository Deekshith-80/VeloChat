# 1. The Build Stage MUST be explicitly defined at the top
FROM node:20-alpine AS build
WORKDIR /app

# Copy dependency configs
COPY package*.json ./
RUN npm install

# Copy the rest of your frontend code source files
COPY . .

# 2. THIS IS WHERE OUR NEW LINES GO (Inside the active build context)
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN echo "VITE_API_URL=/api/v1" > .env

# Run your compilation
RUN npm run build

# 3. The Production Server Stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]