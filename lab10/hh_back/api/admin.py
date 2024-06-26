from django.contrib import admin
from api.models import Company, Vacancy

# Register your models here.

# admin.site.register(Company)


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'city', 'address')
    # fields = ['name', 'description', 'city', 'address']
    search_fields = ('name',)


@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = (
        'name', 
        'description', 
        'salary', 
        'company'
    )

    search_fields = ('name',)