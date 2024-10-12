# Simple HTTP Server

## Description

This project implements a simple HTTP server using Node.js that serves a homepage and an about page. The server responds to two routes: `/` for the homepage and `/about` for the about page, while also handling 404 errors for unknown routes.

## Design Decisions

1. **Separation of Concerns**: 
   - The request handler is separated from the server creation to improve readability and maintainability. This structure allows for easier updates and debugging in the future.

2. **Async/Await Syntax**:
   - I chose to use the `async/await` syntax for handling asynchronous file reading operations. This makes the code cleaner and easier to follow compared to traditional callbacks.

3. **Error Handling**:
   - Implemented try/catch blocks around file read operations to handle potential errors gracefully. This ensures that if a file cannot be read, a proper error message is returned to the client.

4. **Using `fs/promises`**:
   - The `fs/promises` module is utilized to take advantage of promise-based file operations, which simplifies asynchronous code and improves error management.

### Challenges Faced

- **File Reading Issues**: Initially, I encountered issues with reading files, particularly related to incorrect usage of the `fs.readFile` method. I resolved this by switching to `fs/promises` for a more straightforward promise-based approach.
- **Path Management**: Deciding whether to use the `path` module for constructing file paths posed a challenge. I opted not to include it for simplicity, but this might affect cross-platform compatibility if the project scales or requires more complex file paths.

## Running the Application

To run this application, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
# NodeWebServer
