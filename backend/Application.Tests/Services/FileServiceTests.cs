using Application.Interfaces;
using Application.Services;
using Domain;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using NSubstitute.ReturnsExtensions;

namespace Application.Tests.Services
{
    public class FileServiceTests
    {
        private readonly IFileRepository _fileRepository;
        private readonly FileService _fileService;

        public FileServiceTests()
        {
            _fileRepository = Substitute.For<IFileRepository>();
            _fileService = new FileService(_fileRepository);
        }

        [Fact]
        public void GetFile_Should_ThrowException_When_FileDoesNotExist()
        {
            var fileName = "testfile.pdf";
            _fileRepository.GetFile(fileName).Returns(new List<FileDetails>() { });


            Action act = () => _fileService.GetFile(fileName);

            
            act.Should().Throw<Exception>().WithMessage("File does not exist");
        }

    }
}
