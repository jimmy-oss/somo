from django.apps import AppConfig


class SomoBackendConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'somo_backend'

    def ready(self):
        import somo_backend.signals

default_app_config='somo_backend.apps.SomoBackendConfig'
