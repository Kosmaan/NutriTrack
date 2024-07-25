using Domain;

namespace Application.Interfaces
{
    public interface IFileRepository
    {
        public IEnumerable<FileDetails> GetFile(string fileName);

        public bool SaveFile(string fileName, string fileLocation);
    }
}
