# CancerVision: Breast Cancer Detection

!C:\Users\HP\Downloads\Cancervision logo.jpg

## Overview

CancerVision is an AI-based breast cancer detection system that achieves an impressive 98% accuracy. It leverages deep learning techniques to analyze mammograms and identify potential malignancies. This repository contains the code, model, and instructions for using CancerVision.

## Features

- **High Accuracy**: Achieves 98% accuracy in breast cancer detection.
- **Easy to Use**: Simple API for inference on new mammograms.
- **Model Architecture**: Utilizes a convolutional neural network (CNN) trained on a large dataset of mammogram images.
- **Data Preprocessing**: Includes data preprocessing scripts to prepare input data.
- **Model Training**: Instructions for training your own model or fine-tuning the existing one.

## Getting Started

1. **Installation**:
   - Clone this repository: `git clone https://github.com/Ansh-Anshika/CancerVision.git`
   - Install dependencies: `pip install -r requirements.txt`

2. **Usage**:
   - Run the inference script: `python predict.py --input_image path/to/mammogram.png`
   - The script will output the prediction (malignant or benign).

3. **Training**:
   - If you want to train your own model, follow the instructions in `train_model.ipynb`.

## Dataset

We used the publicly available **Breast Cancer Histopathological Database** for training and validation. You can find the dataset here.

## Model Details

Our CNN architecture consists of several convolutional layers followed by fully connected layers. For more details, refer


