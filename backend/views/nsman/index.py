import json
from encoder import AlchemyEncoder
from flask import render_template, session, request
from blueprints import nsman
from models.vm import Vm
from extensions import db
# from app import app


@nsman.route('/', defaults=dict(page=1))
@nsman.route('/page/<int:page>')
def index(page):
    result = {'data': Vm.query.all()}
    return json.dumps(result, cls=AlchemyEncoder)


@nsman.route('/<int:id>')
def select_id(id):
    result = {'data': Vm.query.get(id)}
    return json.dumps(result, cls=AlchemyEncoder)


@nsman.route('/new', methods=['POST'])
def new():
    print('oi 1')
    id = None
    name = None
    iface = None
    print(id, name, iface, 'teste 1')
    if request.method == 'POST':
        print('oi 2')
        # id = request.get_json('id')
        # name = request.get_json('name')
        # iface = request.get_json('iface')
        # print(id, 'teste 2')
        id = request.form['id']
        name = request.form['name']
        iface = request.form['iface']
        print(id, 'teste2')
        ex = Vm(id, name, iface)
        print(ex, 'teste 3')
        db.session.add(ex)
        db.session.commit()
        return 'Dado inserido'
        # else:
        #     print('nao recebi o dado')
