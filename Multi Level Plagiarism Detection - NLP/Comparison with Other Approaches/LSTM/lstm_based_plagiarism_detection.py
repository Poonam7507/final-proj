# -*- coding: utf-8 -*-
"""LSTM Based Plagiarism Detection.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1ez54DW9CBeXUzrFjtaB6pm3Des_5GUg2
"""

import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import Sequential
from keras.layers import concatenate
from tensorflow.keras.layers import Dense, Embedding, LSTM, SpatialDropout1D

# Load the dataset from CSV file
dataset = pd.read_csv('new_data.csv')
dataset.head()
dataset = dataset.dropna()

texts1 = dataset['Text1'].astype(str)
texts2 = dataset['Text2'].astype(str)
labels = dataset['Plagiarism_Status'].astype(str)

# Tokenize the texts
tokenizer = Tokenizer(num_words=5000, split=' ')
tokenizer.fit_on_texts(texts1 + texts2)
X1 = tokenizer.texts_to_sequences(texts1)
X1 = pad_sequences(X1, maxlen=100)
X2 = tokenizer.texts_to_sequences(texts2)
X2 = pad_sequences(X2, maxlen=100)

print("X1 ",X1)

# Concatenate the input tensors
X = np.concatenate((X1, X2), axis=1)

# Define the LSTM model
model = Sequential()
model.add(Embedding(5000, 128, input_length=X.shape[1]))
model.add(SpatialDropout1D(0.4))
model.add(LSTM(256, dropout=0.2, recurrent_dropout=0.2))
model.add(Dense(1, activation='sigmoid'))
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

# Train the model
model.fit(X, labels, epochs=20, batch_size=32)

