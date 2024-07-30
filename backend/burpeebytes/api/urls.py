from django.urls import path, include

urlpatterns = [
    path('web/', include('api.authentication.urls')),
    path('muscles/', include('api.muscles.urls'))
]