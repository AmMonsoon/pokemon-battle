"""Pokemon model."""

from .db import db

class Pokemon(db.Model):
    """Pokemon model class."""

    __tablename__ = 'pokemon'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    avatar = db.Column(db.String(1000), nullable=True)
    ability_1 = db.Column(db.String(30), nullable=False)
    ability_2 = db.Column(db.String(30), nullable=False)
    type = db.Column(db.String(20), nullable=False)
    health = db.Column(db.SmallInteger, nullable=True)