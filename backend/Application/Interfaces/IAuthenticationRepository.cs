using Domain;

namespace Application.Interfaces
{
    public interface IAuthenticationRepository
    {
        Task<IEnumerable<UserCredentials>> GetUser(string email);
        Task<bool> RegisterUser(UserCredentials credentials, UserData data, UserWeight weight);
        Task<bool> GiveUserAdminRights(string email);
    }
}
