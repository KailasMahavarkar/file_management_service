const env = {
    FILE_SERVICE_API_DEV: process.env.NEXT_PUBLIC_FILE_SERVICE_API_DEV || 'http://localhost:8080',
    FILE_SERVICE_API_PROD: process.env.NEXT_PUBLIC_FILE_SERVICE_API_PROD || 'orkait-file-service.up.railway.app',
    API: process.env.NEXT_PUBLIC_API || 'http://localhost:2000',
    FOLDER_NAME: process.env.NEXT_PUBLIC_FOLDER_NAME || "AWS S3 Viewer",
    MODE: process.env.NEXT_PUBLIC_MODE || 'dev',
}

export default env