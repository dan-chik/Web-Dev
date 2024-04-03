from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from product.models import Product, Category

def index(request):
    products = Product.objects.filter(is_active=True)
    categories = Category.objects.all()

    # return render(request, 'api/index.html', {
    #     'categories': categories,
    #     'products': products
    # })

    return JsonResponse({'products': products})

def products(request):
    return render(request, 'api/products.html')
