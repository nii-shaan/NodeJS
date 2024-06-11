# How the web works:

- Computers connected to the internet are called clients and servers
- Clients are internet-connected devices such as computers or mobile phones along with web-acessing software on those devices such as a browser
- Servers on the other hand are computers that store web pages,sites, or apps

# Client Sever Model

- When you type a URL, The client request access to a webpage. A copy of the webpage is downloaded from the server and sent as response to the client to be displayed in the browser

# HTTP

- Hypertext Transfer Protocol
- A protocol that defines a format for clients and servers to speak to each other
- The client sends an `HTTP request` and the server responds with an `HTTP response`

# HTTP and Node

- We can create web server using Node.js
- Node.js has access to operating system functionality like networking
- Node has an event loop to run tasks asynchronously and is perfect for creating web servers that can simultaneously handle large volume of requests
- The node server we create should still respect the HTTP format
- The HTTP module allows creation of web servers that can transfer data over HTTP
