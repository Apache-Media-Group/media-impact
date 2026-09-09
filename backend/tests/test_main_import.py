# backend/tests/test_main_import.py
"""
Test para certificar que FastAPI main.py y todas sus rutas se importan e inicializan
sin NameError, ImportError o fallos de Pydantic.
"""
def test_import_main_app():
    import importlib
    main_module = importlib.import_module("main")
    assert main_module.app is not None
    assert len(main_module.app.routes) > 0
