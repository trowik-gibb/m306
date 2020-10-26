from backend.filesharing.models import User


class PersonController:

    def newPerson(self, email, username, password):
        user = User.objects.create_user(username, email, password)
        user.save()
        return user

    def getPersonByEmail(self, email: str) -> User:
        return User.objects.get(email=email)
