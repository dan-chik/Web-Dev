from django.urls import path, include
from api.views import get_companies

urlpatterns = [
    path('companies/', get_companies),
    
]