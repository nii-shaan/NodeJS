# Node.js Cluster

## Introduction

In Node.js, a cluster is a module that allows you to create child processes (workers) to handle incoming requests. It helps in utilizing the full potential of multi-core systems by distributing the workload across multiple processes.

## Benefits of Using Clusters

- Improved performance: By distributing the workload, clusters can handle more requests simultaneously, resulting in improved performance and reduced response times.
- High availability: If one worker process crashes, the others can continue to handle requests, ensuring that your application remains available.
- Scalability: Clusters allow you to scale your application horizontally by adding more worker processes as needed.

## How Clusters Work

_Each Wokers runs the script again and creates server that listens, all workers share same port_

1. The master process is responsible for creating and managing the worker processes.
2. Each worker process runs in a separate thread and listens for incoming requests.
3. When a request arrives, the master process distributes it to one of the worker processes using a round-robin algorithm.
4. The worker process handles the request and sends the response back to the client.

## Getting Started

To use clusters in your Node.js application, you need to follow these steps:

1. Create a new cluster using the `cluster` module.
2. Fork the desired number of worker processes.
3. Set up communication between the master and worker processes.
4. Handle incoming requests in the worker processes.
5. Scale the number of worker processes based on your application's needs.
