using Application.Interfaces;
using Application.Services;
using Domain;
using FluentAssertions;
using Microsoft.AspNetCore.Authentication;
using NSubstitute;
using NSubstitute.ExceptionExtensions;
using NSubstitute.ReturnsExtensions;
using static System.Runtime.InteropServices.JavaScript.JSType;

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
        public void RegisterUser_Should_ThrowException_When_UserAlreadyExists()
        {
            var email = "existingemail@gmail.com";
            var existingUser = new UserCredentials { Email = email }; 

            _authenticationRepository.GetUser(email).Returns(new UserCredentials { Email = email });


            Action act = () => _authorizationService.RegisterUser(existingUser, new UserData(), new UserWeight());


            act.Should().Throw<Exception>().WithMessage("User already registered");
        }

        [Fact]
        public void RegisterUser_Should_ReturnTrue_When_CredentialsAreValid()
        {
            var email = "testemail@gmail.com";
            var password = "password123";
            var userCredentials = new UserCredentials() { Email = email, Password = password };
            var userData = new UserData();
            var userWeight = new UserWeight();

            _authenticationRepository.GetUser(email).ReturnsNull();
            _authenticationRepository.RegisterUser(Arg.Any<UserCredentials>(), Arg.Any<UserData>(), Arg.Any<UserWeight>()).Returns(true);


            var result = _authorizationService.RegisterUser(userCredentials, userData, userWeight);


            result.Should().BeTrue();
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


            act.Should().Throw<Exception>().WithMessage("Password is incorrect");
        }

        [Fact]
        public void GiveUserAdminRights_Should_ThrowException_When_UserIsNotRegistered()
        {
            var email = "nonexistentemail@gmail.com";

            _authenticationRepository.GetUser(email).ReturnsNull();


            Action act = () => this._authorizationService.GiveUserAdminRights(email);


            act.Should().Throw<Exception>().WithMessage("User is not registered");
        }

        [Fact]
        public void GiveUserAdminRights_Should_ReturnTrue_When_TheEmailIsValid()
        {
            var email = "testemail@gmail.com";

            _authenticationRepository.GetUser(email).Returns(new UserCredentials { Email = email });
            _authenticationRepository.GiveUserAdminRights(email).Returns(true);


            var result = _authorizationService.GiveUserAdminRights(email);

            
            result.Should().BeTrue();
        }
    }
}