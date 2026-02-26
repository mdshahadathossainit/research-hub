from django.db import models

class ResearchPaper(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=150)
    category = models.CharField(max_length=100, blank=True)
    abstract = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
