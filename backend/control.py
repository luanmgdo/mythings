from models.vm import Vm

class Teste():
    def select_name(self, id):
        Vm.query.order_by('id')
