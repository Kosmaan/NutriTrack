using Domain;

namespace Application.Interfaces
{
    public interface IFileRepository
    {
        public bool UpDateFile(string fileName, string fileLocation);
        public IEnumerable<FileDetails> GetFile(string fileName);
        public IEnumerable<FileDetails> GetAllFiles();
        public bool SaveFile(string fileName, string fileLocation);
    }
}
