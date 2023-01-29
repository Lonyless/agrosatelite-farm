from django.contrib.gis.db import models
from django.utils.translation import gettext as _

from farm_base.models.state import State


class City(models.Model):
    name = models.CharField(max_length=255)
    state = models.OneToOneField(State, models.DO_NOTHING)

    class Meta:
        ordering = ['id']
        verbose_name = _('City')
        verbose_name_plural = _('Cities')
