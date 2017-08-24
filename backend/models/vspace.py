from sqlalchemy import Column, String, Text

from models.helpers import Base

class Vspace(Base):
    name = Column(String(20), unique=True, nullable=False)

    def __json__(self):
        return ['id', 'name']


