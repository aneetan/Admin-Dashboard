FROM node:18-alpine
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package files first to leverage Docker cache
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of your application files
COPY . .
 
# Expose the port your app runs on
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
