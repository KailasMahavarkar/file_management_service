# S3 File Listing Service (UI)

This frontend application provides an interface to list and interact with files in an Amazon S3 bucket. It uses the [s3 backend service](https://github.com/KailasMahavarkar/file_service) to fetch the files from s3 bucket.



## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **npm or yarn**: Make sure you have npm (comes with Node.js) or yarn installed.
- **Backend Service**: You need to have the backend service running. You can find the backend service repository [here](https://github.com/KailasMahavarkar/file_service).


### Installation

1. **Clone the Repository**: Open your terminal and clone the repository.
    ```bash
    git clone https://github.com/KailasMahavarkar/file_service_ui.git
    ```

2. **Navigate to the Project Directory**: Change into the project directory.
    ```bash
    cd file_service_ui
    ```

3. **Install Dependencies**: Use npm or yarn to install the necessary dependencies.
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

4. **Configuration**: Create a `.env.local` file in the root directory of the project and add the following environment variables:
    ```env
    NEXT_PUBLIC_FILE_SERVICE_API_DEV=http://127.0.0.1:8080
    NEXT_PUBLIC_FILE_SERVICE_API_PROD=YOUR_BACKEND_SERVICE_URL
    NEXT_PUBLIC_API=http://localhost:2000
    NEXT_PUBLIC_FOLDER_NAME=YOUR_S3_BUCKET_NAME
    NEXT_PUBLIC_SITE_NAME=AWS S3 Viewer
    NEXT_PUBLIC_MODE=prod
    ```

### Usage

To run the frontend service, execute the following command:

```bash
npm run dev
