FROM node as builder
WORKDIR /weact
COPY . .
RUN npm install
RUN npm run build

FROM node
RUN npm install -g serve
WORKDIR /weact
COPY --from=builder /weact/build .
EXPOSE 3000
CMD ["serve", "-p", "3000", "-s", "."]
