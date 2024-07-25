// script.js

const imageInput = document.getElementById('image-input');
const uploadBtn = document.getElementById('upload-btn');
const resultSection = document.getElementById('result-section');
const resultText = document.getElementById('result-text');

uploadBtn.addEventListener('click', async () => {
    const image = imageInput.files[0];
    const formData = new FormData();
    formData.append('image', image);

    try {
        const response = await fetch('/predict', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        resultText.textContent = `Detection Result: ${result.detection}`;
        resultSection.style.display = 'block';
    } catch (error) {
        console.error(error);
        resultText.textContent = 'Error: Unable to detect breast cancer';
    }
});
