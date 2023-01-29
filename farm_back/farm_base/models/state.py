
from django.contrib.gis.db import models
from django.utils.translation import gettext as _


class State(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        ordering = ['id']
        verbose_name = _('State')
        verbose_name_plural = _('States')
