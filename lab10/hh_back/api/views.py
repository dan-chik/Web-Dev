import json
from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import Company, Vacancy

from django.views.decorators.csrf import csrf_exempt
from api.serializers import CompanySerializer

# Create your views here.
@csrf_exempt
def get_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def get_company(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)

    if request.method == "GET":
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)

    elif request.method == "PUT":
        data = json.loads(request.body)
        serializer = CompanySerializer(
            instance=company,
            data=data
        )
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
        
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({"deleted": True})

@csrf_exempt
def get_vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]

    return JsonResponse(vacancies_json, safe=False)

@csrf_exempt
def get_vacancy(request, pk=None):
    try:
        vacancy = Vacancy.objects.get(id=pk)
        return JsonResponse(vacancy.to_json())
    except Vacancy.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })

@csrf_exempt
def get_vacancy_by_company(request, pk = None): 
    company = Company.objects.get(id=pk)

    vacancies = Vacancy.objects.filter(company=company)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    
    return JsonResponse(vacancies_json, safe=False)

def get_topten(request): 
    top_vacancies = Vacancy.objects.order_by('-salary')[:10]
    top_vacancies_json = [top_vacancy.to_json() for top_vacancy in top_vacancies]

    return JsonResponse(top_vacancies_json, safe=False)