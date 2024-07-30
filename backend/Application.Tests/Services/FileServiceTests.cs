using Application.Interfaces;
using Application.Services;
using Domain;
using FluentAssertions;
using Microsoft.AspNetCore.Http;
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

        [Fact]
        public void GetFile_Should_ReturnFileContentResult_When_FileExists()
        {
            var fileName = "testfile.pdf";
            var filePath = Path.Combine(Directory.GetParent(Directory.GetCurrentDirectory()).FullName, "Domain\\files\\", fileName);
            Directory.CreateDirectory(Path.GetDirectoryName(filePath));
            File.WriteAllText(filePath, "test content");

            _fileRepository.GetFile(fileName).Returns(new List<FileDetails> { new FileDetails { FileName = fileName, Path = filePath } });


            var result = _fileService.GetFile(fileName);


            result.Should().NotBeNull();
            result.FileDownloadName.Should().Be(fileName);
            result.ContentType.Should().Be("application/octet-stream");
            result.FileContents.Should().NotBeEmpty();

            File.Delete(filePath);
        }

        [Fact]
        public void SaveFile_Should_ThrowException_When_FileExtensionIsInvalid()
        {
            var file = Substitute.For<IFormFile>();
            file.FileName.Returns("testfile.txt");
            var id = Guid.NewGuid();


            Action act = () => _fileService.SaveFile(file, id);


            act.Should().Throw<Exception>().WithMessage("Invalid file extension");
        }

        [Fact]
        public void SaveFile_Should_ThrowException_When_FileSizeIsTooBig()
        {
            var file = Substitute.For<IFormFile>();
            file.FileName.Returns("testfile.pdf");
            file.Length.Returns(26 * 1024 * 1024); // 26MB
            var id = Guid.NewGuid();


            Action act = () => _fileService.SaveFile(file, id);


            act.Should().Throw<Exception>().WithMessage("File size is too big");
        }

        [Fact]
        public void SaveFile_Should_SaveFile_When_FileIsValid()
        {
            var file = Substitute.For<IFormFile>();
            var id = Guid.NewGuid();
            var fileName = "testfile.pdf";
            var filePath = Path.Combine(Directory.GetParent(Directory.GetCurrentDirectory()).FullName, "Domain\\files\\", fileName);

            file.FileName.Returns(fileName);
            file.Length.Returns(1024);
            _fileRepository.SaveFile(id.ToString().ToUpper(), fileName).Returns(true);


            using (var stream = new MemoryStream())
            {
                file.OpenReadStream().Returns(stream);

                var result = _fileService.SaveFile(file, id);

                result.Should().BeTrue();
                File.Exists(filePath).Should().BeTrue();
                File.Delete(filePath);
            }
        }

        [Fact]
        public void UpdateFile_Should_ThrowException_When_FileExtensionIsInvalid()
        {
            var file = Substitute.For<IFormFile>();
            file.FileName.Returns("testfile.txt");
            var id = Guid.NewGuid();

            Action act = () => _fileService.UpdateFile(file, id);

            act.Should().Throw<Exception>().WithMessage("Invalid file extension");
        }

        [Fact]
        public void UpdateFile_Should_ThrowException_When_FileSizeIsTooBig()
        {
            var file = Substitute.For<IFormFile>();
            file.FileName.Returns("testfile.pdf");
            file.Length.Returns(26 * 1024 * 1024); // 26MB
            var id = Guid.NewGuid();

            Action act = () => _fileService.UpdateFile(file, id);

            act.Should().Throw<Exception>().WithMessage("File size is too big");
        }

        [Fact]
        public void UpdateFile_Should_UpdateFile_When_FileIsValid()
        {
            var file = Substitute.For<IFormFile>();
            var id = Guid.NewGuid();
            var fileName = "testfile.pdf";
            var filePath = Path.Combine(Directory.GetParent(Directory.GetCurrentDirectory()).FullName, "Domain\\files\\", fileName);

            file.FileName.Returns(fileName);
            file.Length.Returns(1024);
            _fileRepository.UpDateFile(id.ToString().ToUpper(), filePath).Returns(true);

            using (var stream = new MemoryStream())
            {
                file.OpenReadStream().Returns(stream);

                var result = _fileService.UpdateFile(file, id);

                result.Should().BeTrue();
                File.Exists(filePath).Should().BeTrue();
                File.Delete(filePath);
            }
        }
    }
}
