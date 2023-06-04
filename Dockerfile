FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install
# If you are building your code for production
# RUN npm ci --omit=dev

# Copy source files
COPY . .
CMD [ "yarn", "start" ]
