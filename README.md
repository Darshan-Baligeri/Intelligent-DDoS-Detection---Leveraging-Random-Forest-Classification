# DDoS Detection and Prevention System

# Perform Cross-Validation and Fine-tuning too


## Overview

This project is an AI-Driven SDN Intrusion Detection System for DDoS attack prevention. It uses machine learning models to detect and mitigate DDoS attacks in real time, leveraging protocol-specific detection mechanisms for higher accuracy.

## Table of Contents

- [Project Workflow](#project-workflow)
- [Hardware Requirements](#hardware-requirements)
- [Software Requirements](#software-requirements)
- [Installation and Setup](#installation-and-setup)
- [Model Training and Deployment](#model-training-and-deployment)
- [API and Frontend Integration](#api-and-frontend-integration)
- [Testing and Validation](#testing-and-validation)
- [Usage Instructions](#usage-instructions)
- [Future Enhancements](#future-enhancements)

## Project Workflow

1. **Traffic Collection**: Network traffic is captured using packet sniffing tools (e.g., Npcap, Scapy).
2. **Feature Extraction**: Data is processed, and relevant network features are extracted.
3. **Model Training**: Three machine learning models (Random Forest, Logistic Regression, Neural Network) are trained on protocol-specific data.
4. **Prediction and Classification**: Incoming traffic is analyzed, classified as 'BENIGN' or 'DDoS'.
5. **Alert System**: Detected DDoS attacks trigger alerts and mitigation actions.
6. **Blocking Mechanism**: IP blocking or rate-limiting strategies are applied.

## Hardware Requirements

- **Processor**: Intel i5/i7 or AMD Ryzen 5/7 (or better)
- **RAM**: Minimum 8GB (Recommended: 16GB for faster processing)
- **Storage**: Minimum 20GB free space
- **Network Interface Card (NIC)**: Supports packet capturing
- **Graphics Card (Optional)**: For deep learning-based enhancements

## Software Requirements

### Operating System

- Windows 10/11
- Ubuntu 20.04+ (Recommended for server deployment)

### Backend

- **Node.js**: v18.0+
- **Express.js**: v4.18+
- **Python**: v3.10+
- **Flask**: v2.2+

### Machine Learning

- **scikit-learn**: v1.2+
- **pandas**: v1.5+
- **numpy**: v1.24+
- **tensorflow/keras**: v2.10+ (for deep learning models)
- **joblib**: v1.2+ (for model serialization)

### Database

- **MongoDB**: v6.0+ (for storing attack logs and user data)

### Packet Capture

- **Npcap**: v1.7+
- **Scapy**: v2.4+

### Frontend

- **React.js**: v18.0+
- **Axios**: v1.3+ (for API requests)
- **Bootstrap**: v5.2+ (for UI styling)

## Installation and Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-repo/ddos-detection.git
cd ddos-detection
```

### Step 2: Setup Backend (Node.js & Flask)

#### Install Node.js Dependencies

```bash
cd backend
npm install
```

#### Install Python Dependencies

```bash
cd ../ml-model
pip install -r requirements.txt
```

### Step 3: Setup Database

- Ensure MongoDB is installed and running:

```bash
mongod --dbpath /path/to/data/db
```

- Configure `.env` file for MongoDB URL:

```
MONGODB_URL=mongodb://localhost:27017/ddos-detection
```

### Step 4: Train and Save Machine Learning Models

```bash
cd ml-model
python train_model.py
```

This will generate a `model.pkl` file for predictions.

### Step 5: Start Backend Services

- Start Flask API:

```bash
cd ml-model
python app.py
```

- Start Node.js Server:

```bash
cd backend
node server.js
```

### Step 6: Start Frontend

```bash
cd frontend
npm install
npm start
```

## Model Training and Deployment

- The training script (`train_model.py`) loads the dataset, applies preprocessing, and trains the model.
- The model is saved as `model.pkl` and used in `app.py` for real-time inference.
- Three models (Random Forest, Logistic Regression, Neural Network) are trained separately for different protocols.

## API and Frontend Integration

- The Flask API (`app.py`) exposes a `/predict` endpoint for detecting attacks.
- The React.js frontend collects network statistics and displays alerts based on API responses.

## Testing and Validation

- Use Postman to test the API:

```http
POST /predict
{
  "packet_features": [feature_values]
}
```

- Simulate attacks using `hping3` or custom traffic generation scripts.
- Validate the accuracy of predictions using benchmark datasets.

## Usage Instructions

1. Run all services (MongoDB, Node.js, Flask, React).
2. Monitor real-time network traffic using the frontend.
3. Get alerts and block malicious IPs if a DDoS attack is detected.

## Future Enhancements

- Implement SDN-based mitigation strategies.
- Integrate deep learning models for better accuracy.
- Develop a cloud-based dashboard for real-time analytics.

---

### Author: Darshan J Baligeri.

For queries, contact: baligeri.darshan@gmail.com
