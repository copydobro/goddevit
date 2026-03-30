"""Vercel serverless entry point for FastAPI."""
import sys
import os

# Add the backend root to Python path so `src` package is importable
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from src.main import app  # noqa: F401 — Vercel picks up `app` from this module
