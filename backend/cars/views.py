from django.shortcuts import render
from rest_framework import viewsets
from cars.models import Car
from cars.serializers import CarSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(["GET"])
def cars(request):
    if request.method == "GET":
        data = Car.objects.all()
        serializer = CarSerializer(data, many=True)
        return Response({"cars": serializer.data})
