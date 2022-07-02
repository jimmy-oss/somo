from django.contrib import admin
from .models import CustomUser, Subject, Assignment, SubmitAssignment
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.admin import UserAdmin
from .forms import MyUserCreationForm, MyUserChangeForm

class UserAdmin(BaseUserAdmin):
    model = CustomUser

    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('category', )}),
    )

    list_display = ['username', 'first_name', 'last_name', 'category']
    search_fields = ('username', 'first_name', 'last_name', 'category')
    ordering = ('-email', )

admin.site.register(CustomUser, UserAdmin)
admin.site.register([
    Subject, 
    Assignment, 
    SubmitAssignment
])