## Run In GCP

```
gcloud builds submit --tag gcr.io/[PROJECT_ID]/predict-app
gcloud run deploy predict-app \
    --image gcr.io/[PROJECT_ID]/predict-app \
    --platform managed \
    --region asia-southeast2 \
    --allow-unauthenticated
```


## Struktur Direktori
```
project-directory/
├── app/
│   ├── controllers/
│   │   ├── predictController.js
│   │   └── historyController.js
│   ├── routes/
│   │   ├── predictRoutes.js
│   │   └── historyRoutes.js
│   ├── services/
│   │   ├── firestoreService.js
│   │   └── modelService.js
│   └── utils/
│       └── fileValidation.js
├── index.js
├── package.json
└── package-lock.json
```
