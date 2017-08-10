from flask import render_template, session
import json
from encoder import AlchemyEncoder

from blueprints import sman
from models.vspace import Vspace

@sman.route('/', defaults=dict(page=1))
@sman.route('/page/<int:page>')
def index(page):
    result = {'data': Vspace.query.all()}
    return json.dumps(result, cls=AlchemyEncoder)

@sman.route('/<int:id>')
def select_id(id):
    result = {'data': Vspace.query.get(id)}
    return json.dumps(result, cls=AlchemyEncoder)
