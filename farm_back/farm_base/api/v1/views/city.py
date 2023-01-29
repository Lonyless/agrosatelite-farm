from rest_framework import generics, filters
from farm_base.api.v1.serializers.city import CityListSerializer

from farm_base.models.city import City


class CityListView(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = CityListSerializer