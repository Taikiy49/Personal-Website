import React, { useState } from 'react';
import { FaCopy, FaCheck, FaPython, FaJs, FaReact, FaDatabase } from 'react-icons/fa';
import '../styles/CodeSnippets.css';

const CodeSnippets = () => {
  const [copiedId, setCopiedId] = useState(null);

  const snippets = [
    {
      id: 1,
      title: "AI Document Search Implementation",
      language: "python",
      icon: <FaPython />,
      description: "Core algorithm for the Geolabs AI search feature using vector embeddings",
      code: `def search_documents(query, documents, model):
    """
    Search documents using semantic similarity with AI embeddings
    """
    query_embedding = model.encode([query])
    doc_embeddings = model.encode(documents)
    
    # Calculate cosine similarity
    similarities = cosine_similarity(query_embedding, doc_embeddings)[0]
    
    # Get top 5 most similar documents
    top_indices = similarities.argsort()[-5:][::-1]
    
    results = []
    for idx in top_indices:
        if similarities[idx] > 0.3:  # Threshold for relevance
            results.append({
                'document': documents[idx],
                'score': similarities[idx],
                'index': idx
            })
    
    return results`
    },
    {
      id: 2,
      title: "React Hook for Microsoft SSO",
      language: "javascript",
      icon: <FaReact />,
      description: "Custom hook for handling Microsoft authentication in the Geolabs platform",
      code: `import { useState, useEffect } from 'react';
import { PublicClientApplication } from '@azure/msal-browser';

export const useMicrosoftAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const msalConfig = {
    auth: {
      clientId: process.env.REACT_APP_AZURE_CLIENT_ID,
      authority: process.env.REACT_APP_AZURE_AUTHORITY,
      redirectUri: window.location.origin
    }
  };
  
  const msalInstance = new PublicClientApplication(msalConfig);
  
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await msalInstance.initialize();
        const accounts = msalInstance.getAllAccounts();
        
        if (accounts.length > 0) {
          setUser(accounts[0]);
        }
      } catch (error) {
        console.error('Auth initialization failed:', error);
      } finally {
        setLoading(false);
      }
    };
    
    initializeAuth();
  }, []);
  
  const login = async () => {
    try {
      const response = await msalInstance.loginPopup({
        scopes: ['User.Read', 'Files.Read']
      });
      setUser(response.account);
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };
  
  const logout = () => {
    msalInstance.logout();
    setUser(null);
  };
  
  return { user, loading, login, logout };
};`
    },
    {
      id: 3,
      title: "Health Data ML Pipeline",
      language: "python",
      icon: <FaDatabase />,
      description: "Machine learning pipeline for processing 400K+ health records (NSF Research)",
      code: `import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, roc_auc_score

class HealthDataPipeline:
    def __init__(self):
        self.scaler = StandardScaler()
        self.model = RandomForestClassifier(
            n_estimators=100,
            max_depth=10,
            random_state=42
        )
    
    def preprocess_data(self, df):
        """Clean and prepare health data for ML"""
        # Handle missing values
        df = df.fillna(df.median(numeric_only=True))
        
        # Feature engineering
        df['bmi'] = df['weight'] / (df['height'] / 100) ** 2
        df['age_group'] = pd.cut(df['age'], 
                                bins=[0, 30, 50, 70, 100], 
                                labels=['young', 'middle', 'senior', 'elderly'])
        
        # Encode categorical variables
        categorical_cols = df.select_dtypes(include=['object']).columns
        df = pd.get_dummies(df, columns=categorical_cols)
        
        return df
    
    def train_model(self, X, y):
        """Train the chronic disease prediction model"""
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )
        
        # Scale features
        X_train_scaled = self.scaler.fit_transform(X_train)
        X_test_scaled = self.scaler.transform(X_test)
        
        # Train model
        self.model.fit(X_train_scaled, y_train)
        
        # Evaluate
        y_pred = self.model.predict(X_test_scaled)
        y_pred_proba = self.model.predict_proba(X_test_scaled)[:, 1]
        
        auc_score = roc_auc_score(y_test, y_pred_proba)
        print(f"Model AUC Score: {auc_score:.3f}")
        print(classification_report(y_test, y_pred))
        
        return auc_score
    
    def predict_risk(self, patient_data):
        """Predict chronic disease risk for new patient"""
        patient_scaled = self.scaler.transform([patient_data])
        risk_probability = self.model.predict_proba(patient_scaled)[0][1]
        
        return {
            'risk_probability': risk_probability,
            'risk_level': 'High' if risk_probability > 0.7 else 
                         'Medium' if risk_probability > 0.4 else 'Low'
        }`
    },
    {
      id: 4,
      title: "OCR Text Extraction",
      language: "python",
      icon: <FaPython />,
      description: "OCR implementation for converting scanned reports to searchable text",
      code: `import pytesseract
from PIL import Image
import cv2
import numpy as np
import re

class OCRProcessor:
    def __init__(self):
        # Configure Tesseract for better accuracy
        self.config = '--oem 3 --psm 6 -c tessedit_char_whitelist=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.,!?@#$%^&*()_+-=[]{}|;:,.<>?'
    
    def preprocess_image(self, image_path):
        """Enhance image quality for better OCR results"""
        img = cv2.imread(image_path)
        
        # Convert to grayscale
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        
        # Apply Gaussian blur to reduce noise
        blurred = cv2.GaussianBlur(gray, (5, 5), 0)
        
        # Apply threshold to get binary image
        _, thresh = cv2.threshold(blurred, 0, 255, 
                                 cv2.THRESH_BINARY + cv2.THRESH_OTSU)
        
        # Morphological operations to clean up
        kernel = np.ones((1, 1), np.uint8)
        cleaned = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel)
        
        return cleaned
    
    def extract_text(self, image_path):
        """Extract text from scanned document"""
        try:
            # Preprocess image
            processed_img = self.preprocess_image(image_path)
            
            # Convert back to PIL Image for Tesseract
            pil_img = Image.fromarray(processed_img)
            
            # Extract text
            raw_text = pytesseract.image_to_string(pil_img, config=self.config)
            
            # Clean and format text
            cleaned_text = self.clean_text(raw_text)
            
            return {
                'success': True,
                'text': cleaned_text,
                'word_count': len(cleaned_text.split()),
                'confidence': self.calculate_confidence(raw_text)
            }
            
        except Exception as e:
            return {
                'success': False,
                'error': str(e),
                'text': ''
            }
    
    def clean_text(self, text):
        """Clean and format extracted text"""
        # Remove extra whitespace
        text = re.sub(r'\s+', ' ', text)
        
        # Fix common OCR errors
        text = text.replace('|', 'I')
        text = text.replace('0', 'O')  # Context-dependent
        
        # Remove non-printable characters
        text = ''.join(char for char in text if char.isprintable())
        
        return text.strip()
    
    def calculate_confidence(self, text):
        """Estimate OCR confidence based on text quality"""
        if not text:
            return 0
        
        # Simple heuristic: ratio of alphanumeric to total characters
        alphanumeric = sum(c.isalnum() for c in text)
        total = len(text.replace(' ', ''))
        
        return (alphanumeric / total * 100) if total > 0 else 0`
    }
  ];

  const copyToClipboard = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const getLanguageClass = (language) => {
    const classes = {
      python: 'language-python',
      javascript: 'language-javascript',
      react: 'language-jsx'
    };
    return classes[language] || 'language-text';
  };

  return (
    <section id="code-snippets" className="code-snippets-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Code I'm Proud Of</h2>
          <p className="section-subtitle">Snippets from real projects that showcase my problem-solving approach</p>
        </div>

        <div className="snippets-grid">
          {snippets.map((snippet, index) => (
            <div 
              key={snippet.id} 
              className="snippet-card cyber-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="snippet-header">
                <div className="snippet-info">
                  <div className="snippet-icon">
                    {snippet.icon}
                  </div>
                  <div>
                    <h3 className="snippet-title">{snippet.title}</h3>
                    <p className="snippet-description">{snippet.description}</p>
                  </div>
                </div>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(snippet.code, snippet.id)}
                  title="Copy to clipboard"
                >
                  {copiedId === snippet.id ? <FaCheck /> : <FaCopy />}
                </button>
              </div>
              
              <div className="code-container">
                <pre className={`code-block ${getLanguageClass(snippet.language)}`}>
                  <code>{snippet.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeSnippets;