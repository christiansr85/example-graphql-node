# example-graphql-node
POC for a test server developed in nodejs and a mongodb database (running in a docker container)

## Running mongodb server
There are many ways to start a `mongodb` server, but here we are going to run it from a `docker` container.

It is going to be created through a `Dockerfile` so simple that you could try to run it directly from command line. Anyway, this file allows to us to extend the mongo configuration.

***
From now on, we need a command line interface, a powershell or a bash in order to perform some commands in order to start the database server.
***

Let's begin creating our image from the `mongodb` image:
```
$ docker build -t mongodbtest .
```

Here `mongodbtest` is a random name chosen by me, but you can name your new image as you want.

Now, we are going to create a volume in order to run the container and persist data along all its executions.

```
$ docker volume create --name=mongotestdata
```

Again, `mongotestdata` is another random name for our custom volume. You can inspect or remove it from the `docker` volume commands.

Once we have done these first steps, to run the container, type the following command:
```
$ docker run --rm --name mongocontainer -v mongotestdata:/data/db -d -p 27017:27017 mongodbtest
```

Please, see how we are now referencing to the custom names we gave to our database server and to our volume. "mongocontainer" is the name the container is going to have. If we do not provide one, `docker` assigns one to it randomly.

At this point, we should see the container running if we execute this command:
```
$ docker ps
```

We could go further and add authentication to it or improve its configuration, but for our current purpose, that is just to perform some queries to a mongo database, I think it is enough.

I just want to add that we can get access to the database server in order to perform any query directly on it by only typing these commands:
```
$ docker exec -it mongodbtest bash
```
(This first one is to run a bash inside the container)
```
$ mongo
```
(This is to run the `mongodb` console inside the bash in order to be able to perform the mongo queries)
