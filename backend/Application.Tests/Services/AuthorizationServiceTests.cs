using Application.Interfaces;
using Application.Services;
using Domain;
using FluentAssertions;
using Microsoft.AspNetCore.Authentication;
using NSubstitute;

namespace Application.Tests.Services
{
    public class AuthorizationServiceTests
    {
        private readonly IPasswordHasher _passwordHasher;
        private readonly IAuthenticationRepository _authenticationRepository;
        private readonly IIdentityHandler _identityHandler;
        private readonly AuthorizationService _authorizationService;

        public AuthorizationServiceTests()
        {
            _passwordHasher = Substitute.For<IPasswordHasher>();
            _identityHandler = Substitute.For<IIdentityHandler>();
            _authenticationRepository = Substitute.For<IAuthenticationRepository>();
            _authorizationService = new AuthorizationService(_passwordHasher, _authenticationRepository, _identityHandler);
        }

        [Fact]
        public void LoginUser_Should_ReturnUser_When_CredentialsAreValid()
        {
            var email = "testemail@gmail.com";
            var password = "password123";
            var encryptedPassword = "hashedpassword123";
            var user = new UserCredentials { Email = email, Password = encryptedPassword };

            _passwordHasher.Hash(password).Returns(encryptedPassword);
            _passwordHasher.Verify(encryptedPassword, password).Returns(true);

            _authenticationRepository.GetUser(email).Returns(user);


            var result = _authorizationService.LoginUser(new UserCredentials { Email = email, Password = password });


            result.Should().BeOfType<User>();
        }

        [Fact]
        public void LoginUser_Should_ThrowException_When_PasswordIsIncorrect()
        {
            var email = "testemail@gmail.com";
            var password = "wrongpassword";
            var encryptedPassword = this._passwordHasher.Hash("correctpassword");
            var user = new UserCredentials
            {
                Email = email,
                Password = encryptedPassword
            };

            _passwordHasher.Verify(encryptedPassword, password).Returns(false);
            _authenticationRepository.GetUser(email)!.Returns(user);


            Action act = () => this._authorizationService.LoginUser(new UserCredentials {Email = email, Password = password });


            act.Should().Throw<ArgumentException>().WithMessage("Password is incorrect");
        }


    }
}