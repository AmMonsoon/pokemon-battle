"""User model."""

from .db import db

class User(db.Model):
    """User model."""

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    trainer_name = db.Column(db.String(50), nullable=False, unique=True)
    
