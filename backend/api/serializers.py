from rest_framework import serializers
from .models import ResearchPaper

class PaperSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchPaper
        fields = '__all__'
