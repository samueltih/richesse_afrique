FROM node:18-alpine

# Server config
ENV SERVER_PORT 3000

# Database Configuration
ENV DATABASE_URL ''
ENV DATABASE_NAME 'r_a'

RUN npm run build

CMD ["node", ".output/server/index.mjs"]
