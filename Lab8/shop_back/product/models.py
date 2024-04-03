from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.ForeignKey(Category, related_name="products", on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    price = models.FloatField()
    count = models.IntegerField(max_length=100)
    is_active = models.BooleanField(default=False)
    image = models.ImageField(upload_to='product_images', blank=True, null=True)

    def __str__(self):
        return self.name
