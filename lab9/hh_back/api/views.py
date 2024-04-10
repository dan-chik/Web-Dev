from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse

# Create your views here.

def get_companies(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]

    return JsonResponse(products_json, safe=False)

def get_company(request, pk=None):
    try:
        product = Product.objects.get(id=pk)
        return JsonResponse(product.to_json())
    except Product.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })
