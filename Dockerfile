FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install
RUN yarn global add ts-node

# Copy source files
COPY . .