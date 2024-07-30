﻿using Application.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Application.Services
{
    public class FileService
    {
        private IFileRepository _fileRepository;

        private static readonly List<string> allowedExtensions = new() { ".jpeg", ".cvs", ".png", ".pdf" , ".jpg"};

        public FileService(IFileRepository fileRepository)
        {
            _fileRepository = fileRepository;
        }

        public FileContentResult GetFile(string fileName)
        {
            var path = Directory.GetParent(Directory.GetCurrentDirectory()) + "\\Domain\\files\\";
            var checkFileExistence = this._fileRepository.GetFile(fileName);
            if (checkFileExistence.ToList().Count == 0 || !File.Exists(path + fileName))
            {
                throw new Exception("File does not exist");
            }

            var fileBytes = File.ReadAllBytes(path + fileName); //should probably get the path from db since it's saved there
            var fileResult = new FileContentResult(fileBytes, "application/octet-stream")
            {
                FileDownloadName = fileName
            };

            return fileResult;
        }

        public bool SaveFile(IFormFile file, Guid id) {
            var extension = Path.GetExtension(file.FileName);
            if (!allowedExtensions.Contains(extension))
            {
                throw new Exception("Invalid file extension");
            }

            var fileSize = file.Length;
            
            if (fileSize > 25 * 1024 * 1024)
            {
                throw new Exception("File size is too big");
            }

            var path = Directory.GetParent(Directory.GetCurrentDirectory()) + "\\Domain\\files\\";
            /*var checkFileExistence = await this._fileRepository.GetFile(file.FileName);
            if (checkFileExistence.ToList().Count != 0 || File.Exists(path + file.FileName))
            {
                throw new Exception("File already exists");
            }*/

            using var stream = new FileStream(path + file.FileName, FileMode.Create);
            file.CopyTo(stream);
            if (File.Exists(path + file.FileName))
            {
                return this._fileRepository.SaveFile(id.ToString().ToUpper(),file.FileName);
            }

            return true;
        }

        public bool UpdateFile(IFormFile file, Guid id)
        {
            var extension = Path.GetExtension(file.FileName);
            if (!allowedExtensions.Contains(extension))
            {
                throw new Exception("Invalid file extension");
            }

            var fileSize = file.Length;

            if (fileSize > 25 * 1024 * 1024)
            {
                throw new Exception("File size is too big");
            }

            var path = Directory.GetParent(Directory.GetCurrentDirectory()) + "\\Domain\\files\\";
            /*var checkFileExistence = await this._fileRepository.GetFile(file.FileName);
            if (checkFileExistence.ToList().Count != 0 || File.Exists(path + file.FileName))
            {
                throw new Exception("File already exists");
            }*/

            using var stream = new FileStream(path + file.FileName, FileMode.Create);
            file.CopyTo(stream);
            if (File.Exists(path + file.FileName))
            {
                return this._fileRepository.UpDateFile(id.ToString().ToUpper(), path + file.FileName);
            }

            return true;
        }
    }
}
