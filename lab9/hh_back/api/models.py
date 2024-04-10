from django.db import models

# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=200),
    description = models.TextField(blank=True, null=True),
    city = models.CharField(),
    address = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Companies"

class Vacancy(models.Model):
    name = models.CharField(max_length=200),
    description = models.TextField(blank=True, null=True),
    salary = models.FloatField(),
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Vacancies"