from rest_framework import serializers

from farm_base.models.city import City


class CityListSerializer(serializers.ModelSerializer):

    class Meta:
        model = City
        fields = '__all__'
