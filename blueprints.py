"""All Flask blueprints for the entire application.

All blueprints for all views go here. They shall be imported by the views 
themselves and by application.py. Blueprint URL paths are defined here as well.
"""

from flask import Blueprint


def _factory(partial_module_string, url_prefix):
    """Generates blueprint objects for view modules.

    Positional arguments:
    partial_module_string -- string representing a view module without the absolute path (e.g. 'home.index' for
        views.home.index).
    url_prefix -- URL prefix passed to the blueprint.

    Returns:
    Blueprint instance for a view module.
    """
    name = partial_module_string
    import_name = 'views.{}'.format(partial_module_string)
    template_folder = 'templates'
    blueprint = Blueprint(name, import_name, template_folder=template_folder, url_prefix=url_prefix)
    return blueprint

home_index = _factory('home.index', '/')
user = _factory('user.user', '/user')
sman = _factory('sman.index', '/sman')
nsman = _factory('nsman.index', '/nsman')
#examples_alerts = _factory('examples.alerts', '/examples/alerts')
#examples_exception = _factory('examples.exception', '/examples/exception')


#all_blueprints = (examples_alerts, examples_exception, home_index, teste, )
all_blueprints = (home_index, user, sman, nsman, )
