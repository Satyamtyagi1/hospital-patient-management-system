# Hospital Patient Management System - Backend API

A complete backend API for a Hospital Patient Management System built with Node.js, Express.js, and MongoDB.

## Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment variables

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

- `POST /patients` - Create a new patient
- `GET /patients` - Get all patient records
- `GET /patients/search?name=xyz` - Search patient by name
- `GET /patients/:id` - Get patient by ID
- `PUT /patients/:id` - Update patient details
- `DELETE /patients/:id` - Delete patient record

## Deployment Instructions

### GitHub Deployment
1. Initialize git in your project directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a new repository on GitHub.
3. Link your local repository to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/hospital-patient-api.git
   git branch -M main
   git push -u origin main
   ```

### Render Deployment
1. Create a free account on [Render](https://render.com/).
2. Go to the Dashboard and click **New +** > **Web Service**.
3. Connect your GitHub account and select your repository (`hospital-patient-api`).
4. Configure the Web Service:
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Scroll down to **Advanced** > **Environment Variables** and add:
   - `PORT`: 10000 (Render uses this by default)
   - `MONGODB_URI`: `<your-mongodb-atlas-uri>`
6. Click **Create Web Service**. Render will now build and deploy your API!

## Postman Testing Examples

You can use the following JSON bodies for testing the endpoints in Postman.

### 1. Create Patient (`POST /patients`)
**Headers**: `Content-Type: application/json`
**Body** (raw JSON):
```json
{
  "fullName": "John Doe",
  "email": "johndoe@example.com",
  "phoneNumber": "123-456-7890",
  "age": 45,
  "gender": "Male",
  "disease": "Hypertension",
  "doctorAssigned": "Dr. Sarah Smith",
  "patientType": "Inpatient",
  "roomNumber": "101A",
  "status": "Admitted"
}
```

### 2. Get All Patients (`GET /patients`)
Just send the `GET` request.

### 3. Search Patient by Name (`GET /patients/search?name=John`)
Just send the `GET` request with the query parameter `?name=John`

### 4. Get Patient by ID (`GET /patients/:id`)
Replace `:id` with the MongoDB `_id` received from the creation step.

### 5. Update Patient (`PUT /patients/:id`)
**Headers**: `Content-Type: application/json`
**Body** (raw JSON):
```json
{
  "status": "Discharged"
}
```

### 6. Delete Patient (`DELETE /patients/:id`)
Just send the `DELETE` request with the correct ID.
