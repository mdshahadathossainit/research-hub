from django.urls import path
from .views import PaperListCreate

urlpatterns = [
    path('papers/', PaperListCreate.as_view()),
]
