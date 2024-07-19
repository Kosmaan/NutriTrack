using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Application.Services;
using WebApiContracts;
using WebApiContracts.Mappers;

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
        public async Task<ActionResult<bool>> RegisterUser([FromBody] SignupDTO formData)
        {

            var result = await this._authorizationService.RegisterUser(formData.ToUserCredentials());
            return Ok(result);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<string>> LoginUser([FromBody] UserCredentialsContract credentialsContract)
        {
            var result = await this._authorizationService.LoginUser(credentialsContract.MapTestToDomain());

            _logger.LogInformation("Logged in as user: "+result.Email);

            return Ok(result);
        }

        [HttpPost]
        [Authorize(Policy = IdentityData.AdminUserPolicyName)]
        public async Task<ActionResult<string>> GiveUserAdminRights([FromQuery] string email)
        {
            var result = await this._authorizationService.GiveUserAdminRights(email);

            return Ok(result);
        }

        [HttpGet]
        public ActionResult<string> TestMethod()
        {
            return Ok("Test works!");
        }

        [HttpGet]
        [Authorize(Policy = IdentityData.AdminUserPolicyName)]
        public ActionResult<string> TestMethod2()
        {
            return Ok("Test works!");
        }
    }
}
