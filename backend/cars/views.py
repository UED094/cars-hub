from django.shortcuts import render
from cars.models import Car
from cars.serializers import CarSerializer
from rest_framework.response import Response
from rest_framework.views import APIView


class CarsView(APIView):
    def get(self, request):
        data = Car.objects.all()
        serializer = CarSerializer(data, many=True)
        return Response({"cars": serializer.data})


# @api_view(["GET"])
# class cars(APIView):
#     serializer_class = CarSerializer
#     queryset = Car.objects.all()


# def cars(request):
#     if request.method == "GET":
#         data = Car.objects.all()
#         serializer = CarSerializer(data, many=True)
#         return Response({"cars": serializer.data})
