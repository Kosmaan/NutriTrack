using Domain;

namespace Application.Interfaces
{
    public interface IAuthenticationRepository
    {
        UserCredentials GetUserCredentials(string email);
        UserData GetUserData(string email);
        UserCredentials GetUser(string email);
        bool RegisterUser(UserCredentials credentials, UserData data, UserWeight weight);
        bool GiveUserAdminRights(string email);
        bool ChangePassword(Guid User_id, string password);
        bool ChangeDetails(Guid User_id, ChangeDetails details);
        bool DeleteUser(Guid User_id);
        IEnumerable<UserWeight> GetUserWeight(string email);
        bool AddUserWeight(UserWeight weight);
        bool ChangeCurrentPlan(Guid Plan_id, String email);
        bool ContactUs(ContactUs contact);

    }
}
