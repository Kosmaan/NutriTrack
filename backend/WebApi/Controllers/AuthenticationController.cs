﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Application.Services;
using WebApiContracts;
using WebApiContracts.Mappers;
using Domain;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly AuthorizationService _authorizationService;
        private readonly ILogger<AuthenticationController> _logger;

        public AuthenticationController(AuthorizationService authorizationService, ILogger<AuthenticationController> logger)
        {
            _authorizationService = authorizationService;
            _logger = logger;
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult<bool> RegisterUser([FromBody] SignupDTO formData)
        {
            var result = this._authorizationService.RegisterUser(formData.ToUserCredentials(), formData.ToUserData(), formData.ToUserWeight());

            return Ok(result);
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult<string> LoginUser([FromBody] UserCredentialsContract credentialsContract)
        {
            var result = this._authorizationService.LoginUser(credentialsContract.MapTestToDomain());

            _logger.LogInformation("Logged in as user: "+result.Email);

            return Ok(result);
        }

        [HttpPost]
        [Authorize(Policy = IdentityData.AdminUserPolicyName)]
        public ActionResult<string> GiveUserAdminRights([FromQuery] string email)
        {
            var result = this._authorizationService.GiveUserAdminRights(email);

            return Ok(result);
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult<string> ChangePassword([FromBody] UserCredentialsContract credentialsContract)
        {
            var result = this._authorizationService.ChangePassword(credentialsContract.MapTestToDomain());

            return Ok(result);
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult<string> ChangeDetails([FromBody] ChangeDeatilsDTO details)
        {
            var result = this._authorizationService.ChangeDetails(details.ToEntity());

            return Ok(result);
        }

        [HttpDelete]
        [Authorize(Policy = IdentityData.AdminUserPolicyName)]
        public ActionResult<string> DeleteUser([FromBody] string email)
        {
            var result = this._authorizationService.DeleteUser(email);

            return Ok(result);
        }
    }
}
