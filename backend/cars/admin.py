from django.contrib import admin
from .models import Car


# Register your models here.
class CarAdmin(admin.ModelAdmin):
    list_display = ("make", "model")


admin.site.register(Car, CarAdmin)
