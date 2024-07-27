using Application.Interfaces;
using Application.Services;
using FluentAssertions.Common;
using Microsoft.Extensions.DependencyInjection;
using NSubstitute;

namespace Application.Tests
{
    public class DependencyInjectionTests
    {

        [Fact]
        public void AddApplicationServices_Should_RegisterAllServices()
        {
            var services = new ServiceCollection();

            var _passwordHasher = Substitute.For<IPasswordHasher>();
            var _authenticationRepository = Substitute.For<IAuthenticationRepository>();
            var _identityHandler = Substitute.For<IIdentityHandler>();

            services.AddSingleton(_passwordHasher);
            services.AddSingleton(_authenticationRepository);
            services.AddSingleton(_identityHandler);

            
            services.AddApplicationServices();
            var serviceProvider = services.BuildServiceProvider();

            
            var authorizationService = serviceProvider.GetService<AuthorizationService>();
            Assert.NotNull(authorizationService);
        }
    }
}
