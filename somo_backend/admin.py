from django.contrib import admin
from .models import CustomUser, Subject, Assignment, SubmitAssignment, Trainer, Student
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.admin import UserAdmin
# from .forms import MyUserCreationForm, MyUserChangeForm

class UserAdmin(BaseUserAdmin):
    model = CustomUser

    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('is_trainer', 'is_student', )}),
    )

    list_display = ['username', 'email', 'is_trainer', 'is_student']
    search_fields = ('username', 'email', 'is_student', 'is_student')
    ordering = ('-email', )

admin.site.register(CustomUser, UserAdmin)
admin.site.register([
    Trainer,
    Student,
    Subject, 
    Assignment, 
    SubmitAssignment
])