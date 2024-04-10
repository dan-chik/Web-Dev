from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import Company, Vacancy

# Create your views here.

def get_companies(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]

    return JsonResponse(companies_json, safe=False)

def get_company(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
        return JsonResponse(company.to_json())
    except Company.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })
