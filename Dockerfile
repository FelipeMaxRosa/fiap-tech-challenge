FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install
RUN yarn global add ts-node
# If you are building your code for production
# RUN npm ci --omit=dev

# Copy source files
COPY . .
EXPOSE 8080
CMD [ "node", "./src/server.ts" ]