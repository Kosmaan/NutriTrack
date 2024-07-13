using System.Security.Principal;

namespace Domain
{
    public class JwtBearerClient: IIdentity
    {
        public string? AuthenticationType { get; set; }
        public bool IsAuthenticated { get; set; }
        public string? Name { get; set; }
    }
}
