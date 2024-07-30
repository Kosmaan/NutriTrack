﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using Application.Services;
using WebApiContracts;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class FileController : ControllerBase
    {
        private readonly FileService _fileService;

        public FileController(FileService fileService)
        {
            _fileService = fileService;
        }

        [HttpGet]
        [Authorize(Policy = IdentityData.AdminUserPolicyName)]
        public ActionResult GetFile(string fileName)
        {
            var result = this._fileService.GetFile(fileName);

            return Ok(result);
        }

        /*[HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> SaveFile(IFormFile file)
        {
            var result = await this._fileService.SaveFile(file);

            return Ok(result);
        }*/
    }
}