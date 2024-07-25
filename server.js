// server.js

const express = require('express');
const app = express();
const multer = require('multer');
const { google } = require('googleapis');

const upload = multer({ dest: './uploads/' });

app.post('/predict', upload.single('image'), async (req, res) => {
    const image = req.file;
    const auth = new google.auth.GoogleAuth({
        // Your Google Colab credentials
        client_id: 'YOUR_CLIENT_ID',
        client_secret: 'YOUR_CLIENT_SECRET',
        redirect_uri: 'YOUR_REDIRECT_URI',
    });

    const colab = google.colab('v1');
    const response = await colab.projects.predict({
        requestBody: {
            instances: [
                {
                    image: {
                        b64: image.buffer.toString('base64'),
                    },
                },
            ],
        },
    });

    const result = response.data.predictions[0].output;
    res.json({ detection: result });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
