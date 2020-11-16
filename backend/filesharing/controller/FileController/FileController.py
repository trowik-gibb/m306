from backend.filesharing.models import File
from typing import List


class FileController:

    def getAllFiles(self) -> List[File]:
        return File.objects.all()
