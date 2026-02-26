from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ResearchPaper
from .serializers import PaperSerializer

class PaperListCreate(APIView):
    def get(self, request):
        papers = ResearchPaper.objects.all().order_by('-created_at')
        serializer = PaperSerializer(papers, many=True)
        return Response(serializer.data)

    def post(self, request):
        payload = request.data
        content = payload.get('abstract', '').lower()
        
        if any(word in content for word in ['neural', 'deep learning', 'cnn', 'rnn']):
            payload['category'] = 'Machine Learning'
        elif any(word in content for word in ['encryption', 'security', 'cyber']):
            payload['category'] = 'Cybersecurity'
        elif any(word in content for word in ['cloud', 'distributed', 'server']):
            payload['category'] = 'Cloud Computing'
        else:
            payload['category'] = 'General Research'

        serializer = PaperSerializer(data=payload)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
