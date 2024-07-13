using Domain;

namespace Application.Interfaces
{
    public interface IFileRepository
    {
        public Task<IEnumerable<FileDetails>> GetFile(string fileName);

        public Task<bool> SaveFile(string fileName, string fileLocation);
    }
}
