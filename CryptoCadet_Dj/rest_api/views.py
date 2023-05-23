import time

from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.


class MockFirebase:
    def __init__(self) -> None:
        pass

    def get_user(self, pk):
        pass


f = MockFirebase()


class UserExample(APIView):
    def get(self, request, **kwargs):
        user_id = kwargs["user_id"]
        return Response({"message": f"Hello {user_id}!", "timestamp": time.asctime()})

    def post(self, request, **kwargs):
        user_id = kwargs["user_id"]
        return Response({"message": f"Post {user_id}!", "timestamp": time.asctime()})


class UserAuthExample(APIView):
    def post(self, request):
        email = request.data["email"]
        pwd = request.data["password"]
        f.get_user(pk=email)
