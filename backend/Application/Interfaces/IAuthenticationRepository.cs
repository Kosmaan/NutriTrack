using Domain;

namespace Application.Interfaces
{
    public interface IAuthenticationRepository
    {
        Task<IEnumerable<UserCredentials>> GetUser(string email);
        Task<bool> RegisterUser(UserCredentials credentials);
        Task<bool> GiveUserAdminRights(string email);
    }
}
