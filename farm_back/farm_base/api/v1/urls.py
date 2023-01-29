from __future__ import unicode_literals
from django.urls import path

from farm_base.api.v1.views.city import CityListView

from .views import FarmListCreateView, \
    FarmRetrieveUpdateDestroyView, OwnerListCreateView, \
    OwnerRetrieveUpdateDestroyView

urlpatterns = [
    path('farms', FarmListCreateView.as_view(),
         name="farms-list-create"),
    path('farms/<int:pk>', FarmRetrieveUpdateDestroyView.as_view(),
         name="farms-retrieve-update-destroy"),

    path('owners', OwnerListCreateView.as_view(),
         name="owners-list-create"),
    path('owners/<int:pk>',
         OwnerRetrieveUpdateDestroyView.as_view(),
         name="owners-retrieve-update-destroy"),
     
    path('cities', CityListView.as_view(),
         name="city-list"),
]
