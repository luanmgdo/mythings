from importlib import import_module
import locale
import os

from flask import Flask
from flask_cors import CORS, cross_origin
#from flask_statics import Statics

from blueprints import all_blueprints
from extensions import db

APP_ROOT_FOLDER = os.path.abspath(os.path.dirname(__file__))
TEMPLATE_FOLDER = os.path.join(APP_ROOT_FOLDER, 'templates')
STATIC_FOLDER = os.path.join(APP_ROOT_FOLDER, 'static')
REDIS_SCRIPTS_FOLDER = os.path.join(APP_ROOT_FOLDER, 'redis_scripts')

def get_config(config_class_string, yaml_files=None):
    """Load the Flask config from a class.

    Positional arguments:
    config_class_string -- string representation of a configuration class that will be loaded (e.g.
        'config.Production').
    yaml_files -- List of YAML files to load. This is for testing, leave None in dev/production.

    Returns:
    A class object to be fed into app.config.from_object().
    """
    config_module, config_class = config_class_string.rsplit('.', 1)
    config_class_object = getattr(import_module(config_module), config_class)
    config_obj = config_class_object()

    # Expand some options.    
    db_fmt = 'models.{}'
    if getattr(config_obj, 'DB_MODELS_IMPORTS', False):
        config_obj.DB_MODELS_IMPORTS = [db_fmt.format(m) for m in config_obj.DB_MODELS_IMPORTS]
    
    return config_obj


def create_app(config_obj, no_sql=False):
    """Flask application factory. Initializes and returns the Flask application.

    Blueprints are registered in here.

    Modeled after: http://flask.pocoo.org/docs/patterns/appfactories/

    Positional arguments:
    config_obj -- configuration object to load into app.config.

    Keyword arguments:
    no_sql -- does not run init_app() for the SQLAlchemy instance. For Celery compatibility.

    Returns:
    The initialized Flask application.
    """
    # Initialize app. Flatten config_obj to dictionary (resolve properties).
    app = Flask(__name__, template_folder=TEMPLATE_FOLDER, static_folder=STATIC_FOLDER)
    CORS(app)
    config_dict = dict([(k, getattr(config_obj, k)) for k in dir(config_obj) if not k.startswith('_')])
    app.config.update(config_dict)

    # Import DB models. Flask-SQLAlchemy doesn't do this automatically like Celery does.
    with app.app_context():
        for module in app.config.get('DB_MODELS_IMPORTS', list()):
            import_module(module)

    # Setup redirects and register blueprints.
    app.add_url_rule('/favicon.ico', 'favicon', lambda: app.send_static_file('favicon.ico'))
    for bp in all_blueprints:
        import_module(bp.import_name)
        app.register_blueprint(bp)

    # Initialize extensions/add-ons/plugins.
    if not no_sql:
        db.init_app(app)
    #Statics(app)  # Enable Flask-Statics-Helper features.
    #redis.init_app(app)
    #celery.init_app(app)
    #mail.init_app(app)

    # Activate middleware.
    locale.setlocale(locale.LC_ALL, 'en_US.UTF-8')  # For filters inside the middleware file.
    with app.app_context():
        import_module('middleware')

    # Return the application instance.
    return app
 
    
if __name__ == '__main__':
    config_class_string = 'config.Config'
    #config_class_string = 'config.Production'
    app = create_app(get_config(config_class_string))
    #fsh_folder = app.blueprints['flask_statics_helper'].static_folder
    app.run()
    