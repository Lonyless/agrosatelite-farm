from rest_framework import generics

from farm_base.api.v1.serializers import FarmListSerializer, \
    FarmCreateSerializer, FarmDetailSerializer
from farm_base.models import Farm
from django.db.models import Q


class FarmListCreateView(generics.ListCreateAPIView):
    queryset = Farm.objects.filter(is_active=True)
    serializer_class = FarmListSerializer

    def filter_queryset(self, queryset):
        '''Performs complex filtering that can't be done by drf built in filtering'''

        filtered = super().filter_queryset(queryset)

        def int_tryparse(val_str):
            try:
                return int(search)
            except Exception:
                return None

        if 'search' in self.request.query_params:
            search = self.request.query_params.get('search')
            filters = Q(owner__name__icontains=search) | Q(owner__document=search) | Q(name__icontains=search)
            
            '''Parsing to int cause DRF throws an error when comparing int with string'''
            id = int_tryparse(search)
            if id:
                filters |= Q(pk=search)

            filtered = filtered.filter(filters)

        return filtered

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return FarmListSerializer
        else:
            return FarmCreateSerializer

    def perform_create(self, serializer):
        farm = serializer.save()
        area = float(farm.geometry.area)
        centroid = farm.geometry.centroid
        serializer.save(area=area, centroid=centroid)


class FarmRetrieveUpdateDestroyView(
    generics.RetrieveUpdateDestroyAPIView):
    queryset = Farm.objects.filter(is_active=True)
    serializer_class = FarmDetailSerializer
