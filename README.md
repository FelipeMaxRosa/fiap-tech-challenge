# fiap-tech-challenge

## How to Build the App Image

First you must to create the MySQL Docker Instance running:

```
docker compose up
```

To test it locally you just need to run:
`yarn start` then you should see the messages on console:

```
Running on PORT:8080
Connected to MySQL Server!
```

After that you must to create the node app image with:

```
docker build . -t felipemaxrosa/fastfoodius-api
```

## How to Run Image

```
docker run -p 8080:8080 felipemaxrosa/fastfoodius-api
```

## How to check if it works

Run on browser `http://localhost:8080`. Then you should the the `Hello World` message.
