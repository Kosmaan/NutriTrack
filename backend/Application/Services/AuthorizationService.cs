using Application.Interfaces;
using Domain;

namespace Application.Services
{
    public class AuthorizationService
    {
        private readonly IPasswordHasher _passwordHasher;
        private readonly IAuthenticationRepository _authenticationRepository;
        private readonly IIdentityHandler _identityHandler;

        public AuthorizationService(IPasswordHasher passwordHasher,
            IAuthenticationRepository authenticationRepository,
            IIdentityHandler identityHandler)
        {
            _passwordHasher = passwordHasher;
            _identityHandler = identityHandler;
            _authenticationRepository = authenticationRepository;
        }

        public bool RegisterUser(UserCredentials credentials, UserData data, UserWeight weight)
        {
            var userCheck = this._authenticationRepository.GetUser(credentials.Email);

            if (userCheck != null)
            {
                throw new Exception("User already registered");
            }

            var hashedPassword = this._passwordHasher.Hash(credentials.Password);
            var registerResult = this._authenticationRepository.RegisterUser(new UserCredentials
            {          
                Password = hashedPassword,
                Email = credentials.Email,
                Role = "user"
            }, new UserData
            {
                First_Name = data.First_Name,
                Last_Name = data.Last_Name,
                Height = data.Height,
                Gender = data.Gender,
                Birth_Date = data.Birth_Date
            }, new UserWeight
            {
                Weight = weight.Weight
            });

            return registerResult;
        }

        public User LoginUser(UserCredentials credentials)
        {
            var userHashed = this._authenticationRepository.GetUser(credentials.Email);

            if (!_passwordHasher.Verify(userHashed.Password, credentials.Password))
            {
                throw new Exception("Password is incorrect");
            }

            var result = new User
            {
                Email = userHashed.Email,
                Role = userHashed.Role,
            };

            var jwtToken = this._identityHandler.GenerateToken(result);
            result.JwtToken = jwtToken;

            return result;
        }

        public bool GiveUserAdminRights(string email)
        {
            var userCheck = this._authenticationRepository.GetUser(email);

            if (userCheck == null)
            {
                throw new Exception("User is not registered");
            }

            var result = this._authenticationRepository.GiveUserAdminRights(email);

            return result;
        }
    }
}
