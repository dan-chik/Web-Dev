from django.db import models

# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=200, default='Default name')
    description = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=200, default='Default City')
    address = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Companies"

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=200, default='Default name')
    description = models.TextField(blank=True, null=True)
    salary = models.FloatField(default=0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Vacancies"

    def to_json(self):
        return {
            # 'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary
        }