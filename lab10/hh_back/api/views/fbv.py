from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
from api.serializers import CompanySerializer, VacancySerializer


# Create your views here.
@api_view(["GET", "POST"])
def get_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def get_company(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "GET":
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = CompanySerializer(
            instance=company,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        company.delete()
        return Response({"deleted": True})


@api_view(["GET", "POST"])
def get_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def get_vacancy(request, pk=None):
    try:
        vacancy = Vacancy.objects.get(id=pk)
    except Vacancy.DoesNotExist as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = VacancySerializer(
            instance=vacancy,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        vacancy.delete()
        return Response({"deleted": True})
    # try:
    #     vacancy = Vacancy.objects.get(id=pk)
    #     return JsonResponse(vacancy.to_json())
    # except Vacancy.DoesNotExist as e:
    #     return JsonResponse({
    #         'error': str(e)
    #     })


@csrf_exempt
def get_vacancy_by_company(request, pk=None):
    company = Company.objects.get(id=pk)

    vacancies = Vacancy.objects.filter(company=company)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]

    return JsonResponse(vacancies_json, safe=False)


def get_topten(request):
    top_vacancies = Vacancy.objects.order_by('-salary')[:10]
    top_vacancies_json = [top_vacancy.to_json() for top_vacancy in top_vacancies]

    return JsonResponse(top_vacancies_json, safe=False)