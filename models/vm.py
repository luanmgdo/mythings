from sqlalchemy import Column, String, Text

from models.helpers import Base

class Vm(Base):
    name = Column(String(20), unique=True, nullable=False)
    iface = Column(String(20), nullable=False)

    def __init__(self, id, name, iface):
        self.id = id
        self.name = name
        self.iface = iface


    def __json__(self):
        return ['id', 'name', 'iface']
