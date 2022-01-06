from django.contrib import admin
from django.contrib.auth.models import Group


from .models import User

class UserAdmin(admin.ModelAdmin):
    model = User

# unregister group and register user
admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
