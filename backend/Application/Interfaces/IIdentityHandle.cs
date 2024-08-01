using Domain;

namespace Application.Interfaces
{
    public interface IIdentityHandler
    {
        string GenerateToken(User user);
    }
}
