"""Abilities model."""

from .db import db

class Abilities(db.Model):
    """Abilities model class."""

    __tablename__ = 'abilities'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    damage = db.Column(db.SmallInteger, nullable=True)

    pokemon = db.relationship("Pokemon", back_populates="abilities")