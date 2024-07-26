using Domain;

namespace Application.Interfaces
{
    public interface IAuthenticationRepository
    {
        UserCredentials GetUser(string email);
        bool RegisterUser(UserCredentials credentials, UserData data, UserWeight weight);
        bool GiveUserAdminRights(string email);
    }
}
