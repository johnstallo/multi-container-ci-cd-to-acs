# Sample app for demonstrating continuous integration and deployment of a multi-container Docker app to Azure Container Service
This repository contains a sample Azure multi-container Docker application.

* service-a: Angular.js sample application with Node.js backend 
* service-b: ASP .NET Core sample service

## Deploy to Azure Container Service
[Follow this tutorial](https://channel9.msdn.com/events/connect/2016/204) to set up continuous integration and deployment of a multi-container Docker application to an Azure Container Service cluster. The tutorial walks through how to use standard Docker assets in your source repository to drive the creation of build and deploy tasks in Visual Studio Team Services, integrate with the new Azure Container Registry, and promote a release across dev/test/production environments without rebuilding container images.

## Run application locally
First, compile the ASP .NET Core application code. This uses a container to isolate build dependencies that is also used by VSTS for continuous integration:

```
docker-compose -f docker-compose.ci.build.yml run ci-build
```

(On Windows, you currently need to pass the -d flag to docker-compose run and poll the container to determine when it has completed).

Now build Docker images and run the services:

```
docker-compose up --build
```

The frontend service (service-a) will be available at http://localhost:8080.

## Deploy to Azure Container Service
TBD
