# breast_cancer_detection.py

import tensorflow as tf
from tensorflow import keras
from PIL import Image
import numpy as np

# Load the pre-trained model
model = keras.models.load_model('breast_cancer_detection_model.h5')

def predict(image):
    # Preprocess the image
    img = Image.open(image)
    img = img.resize((224, 224))
    img = np.array(img) / 255.0
