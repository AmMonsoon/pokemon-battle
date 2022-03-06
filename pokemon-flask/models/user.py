"""User model."""

from .db import db

class User(db.Model):
    """User model class."""

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    avatar = db.Column(db.String(1000), nullable=True)

    pokemon = db.relationship("Pokemon", back_populates="user")
