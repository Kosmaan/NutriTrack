using Domain;

namespace Application.Interfaces
{
    public interface IAuthenticationRepository
    {
        UserCredentials GetUser(string email);
        bool RegisterUser(UserCredentials credentials, UserData data, UserWeight weight);
        bool GiveUserAdminRights(string email);
        bool ChangePassword(Guid User_id, string password);
        bool ChangeDetails(Guid User_id, ChangeDetails details);
        bool DeleteUser(Guid User_id);
        bool ContactUs(ContactUs contact);
    }
}
