# Base image
FROM node:alpine


# Add resources
COPY ./ ./

# Install dependencies
RUN npm install 


# Run node
CMD [ "npm", "start" ]